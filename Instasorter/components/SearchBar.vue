<template>
  <div>
    <input type="text" v-model="username" placeholder="ユーザー名を入力してください">
    <button @click="userSearch">検索</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const username = ref("");
//異なるコンポーネント間で状態を共有できる
const searchedUsername = useState("username", () => "");
const userSearch = () => {
  //入力されたユーザー名を共有ステートにセット
  searchedUsername.value = username.value;
};
</script>