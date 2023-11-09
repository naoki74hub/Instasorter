<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const SITE_TITLE = "Instasorter";
useHead({
 title: SITE_TITLE
});
</script>
