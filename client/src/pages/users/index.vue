<script setup lang="ts">
  import {
    ref, type Ref
  } from 'vue'
  import UserCard from '@/components/UserCard.vue'
  import {
    getUsers,
    type User
  } from '@/model/users'

  const users = ref([] as User[])

  users.value = getUsers()

</script>

<template>
  <div v-for="user in users" :key="user.id">
    <UserCard :user="user" />
  </div>
</template>

<style scoped>

</style>