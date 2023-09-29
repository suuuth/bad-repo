<template>
  <div class="login-view">
    <h1>Log In</h1>
    <form @submit.prevent="login()">
      <div class="mb-3">
        <label class="form-label" for="username">Username</label>
        <input id="username" name="username" class="form-control" type="text" placeholder="Username" v-model="formData.username">
      </div>
      <div class="mb-3">
        <label class="form-label" for="password">Password</label>
        <input id="password" name="password" class="form-control" type="password" v-model="formData.password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data () {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  },
  mounted () {
    let input = document.querySelector('[name="username"]')

    input.focus()

    document.querySelector('body').addEventListener('click', event => {
      !document.querySelector('#app').contains(event.target) && input.focus()
    })
  },
  methods: {
    login () {
      this.$store.dispatch('LogIn', this.formData)
    }
  }
}
</script>

<style scoped>

</style>
