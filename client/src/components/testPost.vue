<template>
  <div class="login-view mb-5">
    <h2>Jwt Test</h2>
    <form @submit.prevent="submit()">
      <div>Success: <span>{{ response }}</span></div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import http from '@/services/http'

export default {
  name: "testPost",
  data () {
    return {
      response: null
    }
  },
  methods: {
    async submit() {
      try {
        this.response = (await http.post('/api/protected'))?.data
      } catch (err) {
        this.response = false
      }
    }
  }
}
</script>

<style scoped>
pre {
  text-align: left;
}
</style>
