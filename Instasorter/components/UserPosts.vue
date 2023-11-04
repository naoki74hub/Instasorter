<template>
  <div class="user-posts" v-if="userData !== null">
    <div class="user-post" v-for="(post, index) in userData.business_discovery.media.data" :key="post.id">
      <img :src="post.media_url" alt="Post Image" class="post-image" />
      <div class="post-caption">{{ post.caption }}</div>
      <a :href="post.permalink" class="post-link">View on Instagram</a>
    </div>
  </div>
</template>
<script setup lang="ts">
//入力されたユーザー名を取得
const searchedUsername = useState("username");
const userData = ref<any>(null);
const fetchUserData = async () => {
  try {
    const { data, pending } = await useFetch("/api/instagram", {
      method: "POST",
      body: { username: searchedUsername.value }
    });
    // 
    userData.value = data.value;
  } catch (error) {
    console.log("Errorです", error);
  }
}
// 検索されたユーザー名が変更されたときにデータをフェッチする
watch(searchedUsername, (newValue) => {
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

.post-image {
  max-width: 100%;
  height: auto;
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