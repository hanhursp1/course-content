<script setup lang="ts">
  import LoginBadge from '@/components/LoginBadge.vue'
</script>

<template>
  <div class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          You must login to see this page!
        </h1>
        <LoginBadge />
      </div>
    </div>
  </div>
</template>