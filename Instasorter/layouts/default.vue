<template>
  <div class="container">
    <header class="search-header">
      <!-- 検索欄 -->
      <input type="text">
    </header>
    <div class="main-content">
      <aside class="sidebar">
        <!-- ソートボタン配置場所　-->
      </aside>
      <main class="posts">
        <!-- 検索されたユーザーの投稿(コードをレンダリングさせる部分→app.vueでいうところのNuxtPageと同じ役割) -->
        <slot/>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>