<template>
  <div id="HomePage">
    <img alt="Vue logo" src="../assets/logo.png">
    <LogIn/>
  </div>
</template>

<script>
import LogIn from '../components/LogIn.vue'
export default {
  name: "HomePage",
  components: {
    LogIn
  }
}
</script>

<style scoped>

</style>
