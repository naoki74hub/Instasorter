<template>
  <aside class="sidebar">
    <button class="sidebar-button" @click="">古い順</button>
    <button class="sidebar-button" @click="">新しい順</button>
    <!-- その他のボタンやサイドバーのコンテンツをここに追加 -->
  </aside>
</template>

<script setup lang="ts">

</script>

<style scoped>
.sidebar {
  position: fixed; /* サイドバーを画面に固定 */
  top: 0; /* 上端からの位置 */
  left: 0; /* 左端からの位置 */
  width: 200px; /* サイドバーの幅 */
  height: 100%; /* 全画面の高さ */
  background-color: #f5f5f5; /* サイドバーの背景色 */
  padding: 20px; /* サイドバーの内側の余白 */
  box-sizing: border-box; /* ボックスサイズの計算方法を指定 */
}

.sidebar-button {
  display: block; /* ブロックレベル要素として表示 */
  width: 100%; /* 親要素の幅に合わせる */
  padding: 10px; /* ボタンの内側の余白 */
  margin-bottom: 10px; /* ボタン間の余白 */
  border: 1px solid #ccc; /* ボタンの枠線 */
  border-radius: 4px; /* ボタンの角を丸くする */
  background-color: #007bff; /* ボタンの背景色 */
  color: white; /* ボタンのテキスト色 */
  font-size: 16px; /* ボタンのフォントサイズ */
  cursor: pointer; /* カーソルをポインターにする */
  text-align: center; /* テキストを中央寄せ */
}

.sidebar-button:hover {
  background-color: #0056b3; /* ホバー時の背景色を濃くする */
}
</style>