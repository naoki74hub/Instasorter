<template>
  <div>
    <input type="text" v-model="username" placeholder="ユーザー名を入力してください">
    <button @click="userSearch">検索</button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits} from 'vue'

const username = ref('');
const emit = defineEmits(['search'])
const userSearch = () => {
  emit('search', username.value);
};
</script>