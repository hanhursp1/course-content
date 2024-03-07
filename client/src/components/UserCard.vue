<script setup lang="ts">
import {
  ref, type Ref, onMounted
} from 'vue'

import {
  getUsers, type User
} from '@/model/users'

defineProps<{
  user: User
}>()
</script>

<template>
  <div>
    <p>{{ user.firstName }} {{ user.lastName }}</p>
  </div>
</template>

<style scoped>

</style>