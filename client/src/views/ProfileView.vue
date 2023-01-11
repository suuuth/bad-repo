<template>
  <div class="UserProfile">
    UserProfile
    <h1>Hello {{ $store.getters.StateUser.name }}</h1>
  </div>
</template>

<script>
export default {
  name: "UserProfile"
}
</script>

<style scoped>

</style>
