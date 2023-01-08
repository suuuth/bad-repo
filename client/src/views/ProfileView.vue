<template>
  <div class="UserProfile">
    UserProfile
    <h1>Hello {{ user.name }}</h1>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data () {
    return {
      user: {
        name: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
