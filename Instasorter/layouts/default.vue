<template>
  <div class="container">
    <header class="search-header">
      <!-- 検索欄 -->
      <SearchBar/>
    </header>
    <div class="main-content">
      <aside class="sidebar">
        <SideBar/>
      </aside>
      <main class="posts">
        <!-- 検索されたユーザーの投稿(コードをレンダリングさせる部分→app.vueでいうところのNuxtPageと同じ役割) -->
        <slot/>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* .main-content {
  margin-left: 220px;
}

.search-header {
  margin-left: 220px;
} */

.container {
  margin-left: 220px;
}
</style>