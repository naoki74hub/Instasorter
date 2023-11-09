<template>
  <div>
    <!-- ローディング状態の表示 -->
    <p v-if="pending">データを取得中です...</p>

    <!-- userDataが存在する場合にユーザー情報と投稿を表示 -->
    <div v-else-if="userData">
      <!-- ユーザープロフィール -->
      <div class="user-profile">
        <img :src="userData.profile_picture_url" alt="User Profile Picture" class="profile-picture">
        <h2>{{ userData.username }}</h2>
        <p>{{ userData.bio }}</p>
        <a :href="`https://www.instagram.com/${userData.username}`" target="_blank" class="profile-link">プロフィールを見る</a>
      </div>
      
      <!-- ユーザーの投稿リスト -->
      <div class="user-posts">
        <div class="user-post" v-for="post in userData.business_discovery.media.data" :key="post.id">
          <template v-if="post.media_type === 'VIDEO'">
            <video controls class="post-video">
              <source :src="post.media_url" type="video/mp4">
              Sorry, your browser doesn't support embedded videos.
            </video>
          </template>
          <template v-else>
            <img :src="post.media_url" alt="Post image" class="post-image">
          </template>
          <p class="post-caption">{{ post.caption }}</p>
          <p class="post-like-count">{{ post.like_count }}</p>
          <p class="post-timestamp">{{ post.timestamp}}</p>
          <a :href="post.permalink" target="_blank" class="post-link">投稿を見る</a>
        </div>
      </div>
    </div>

    <!-- userDataが存在しない場合のメッセージ -->
    <p v-else>ユーザーデータが見つかりません。</p>
  </div>
</template>

<script setup lang="ts">
import type { InstagramBusinessUserData, MediaData } from "@/interfaces";
//入力されたユーザー名を取得
const searchedUsername = useState<string>("username");
const userData = ref<any>();
const pending = ref(false);
//次の投稿データを追跡
let nextPostData = null;

const fetchUserData = async (after: string | null = null) => {
  pending.value = true;

  try {
  //クエリパラメーター作成
  const params: {
    username: string;
    after: string | null
  } = 
  {
    username: searchedUsername.value,
    after: after,
  } 

  const queryParams = new URLSearchParams();
  queryParams.append("username", searchedUsername.value);
  if(after !== null) {
    queryParams.append("after", after);
  }
  const url = `/api/instagram?${queryParams.toString()}`
 
    const { data: posts } = await useFetch<InstagramBusinessUserData>(url, {
      method: "GET",
    });
    //afterがnullまたは空文字列の場合に、userDataを更新
    if(!after) {
      userData.value = posts.value;
    //nullまたは空文字列ではないときに、既存のuserDataに投稿データを追加
    } else {
      const newMediaData = posts.value?.business_discovery.media.data as MediaData[]
      //スプレッド構文を使用して、既存の配列に新しいデータの配列を1つずつプッシュ
      userData.value.business_discovery.media.data.push(...newMediaData);
    }
    //afterCursorを更新
    nextPostData = posts.value?.business_discovery.media.paging.cursors.after as string | null;
    
    if(nextPostData !== null) {
      //まだafterCursor(次の投稿データ)があれば、繰り返しリクエストする
      fetchUserData(nextPostData);
      console.log(`投稿数: ${userData.value.business_discovery.media.data.length}`);
    } else {
      console.log("次の投稿情報はありません。取得処理を終了します");
    }
  } catch (error) {
    console.log("Errorです", error);
  } finally {
    pending.value = false;
  }
}
// 検索されたユーザー名が変更されたときにデータをフェッチする
watch(searchedUsername, (newValue, oldValue) => {
  if(newValue !== oldValue)
  console.log(`New search: ${newValue}`);
  fetchUserData();
});
</script>

<style scoped>
.user-posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.user-post {
  width: calc(33.33% - 10px); /* 3列に整列するための幅調整 */
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.post-image,
.post-video {
  max-width: 100%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px; /* 画像と動画の角を丸める */
}

.post-caption {
  margin-top: 10px;
  font-size: 14px;
}

.post-link {
  display: block;
  margin-top: 10px;
  text-decoration: none;
  color: #007bff;
}

</style>
 
