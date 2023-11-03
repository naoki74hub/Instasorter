<template>
  <di>
  </di>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
//入力されたユーザー名を取得
const searchedUsername = useState("username");
const userData = ref<any>(null);
const fetchUserData = async () => {
  try {
    const { data, refresh } = await useFetch("/api/instagram", {
      method: "POST",
      body: { username: searchedUsername.value }
    });
    userData.value =  data.value;
  } catch (error) {
    console.log("Errorです", error);
  }
};
// 検索されたユーザー名が変更されたときにデータをフェッチする
watch(searchedUsername, (newValue) => {
  console.log(`New search: ${newValue}`);
  fetchUserData();
});

// コンポーネントがマウントされたときにデータをフェッチする
fetchUserData();
</script>

