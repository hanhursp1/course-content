<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="window">
    <Navbar />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.window{
  margin-right: 2rem;
}
</style>
