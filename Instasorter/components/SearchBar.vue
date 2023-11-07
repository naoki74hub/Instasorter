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

<style scoped>
/* コンポーネント全体のスタイル */
div {
  display: flex; /* フレックスボックスレイアウトを使用 */
  gap: 10px; /* 要素間の隙間 */
  padding: 10px; /* 内側の余白 */
  align-items: center; /* 要素を中央に配置 */
}

/* テキスト入力フィールドのスタイル */
input[type="text"] {
  width: 250px; /* 検索欄の幅を200pxに設定 */
  padding: 8px; /* テキスト入力の余白 */
  border: 1px solid #ccc; /* 枠線 */
  border-radius: 4px; /* 角を丸くする */
  font-size: 16px; /* フォントサイズ */
}

/* ボタンのスタイル */
button {
  padding: 10px 15px; /* ボタンの余白 */
  border: none; /* 枠線をなくす */
  border-radius: 4px; /* 角を丸くする */
  background-color: #007bff; /* 背景色 */
  color: white; /* テキスト色 */
  font-size: 16px; /* フォントサイズ */
  cursor: pointer; /* カーソルをポインターにする */
  white-space: nowrap; /* ボタンテキストを折り返さない */
}

/* ボタンのホバー時のスタイル */
button:hover {
  background-color: #0056b3; /* ホバー時の背景色を濃くする */
}
</style>