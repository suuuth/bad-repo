<template>
  <div class="login-view">
    <h1>Register</h1>
    <form @submit.prevent="register()">
      <div class="mb-3">
        <label class="form-label" for="username">Name</label>
        <input id="name" name="name" class="form-control" type="text" placeholder="Name" v-model="formData.name">
      </div>
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
import axios from "axios";

export default {
  name: "RegisterView",
  data () {
    return {
      formData: {
        name: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      axios.post(`${window.location.origin}/api/register`, this.formData).then(response => {
        console.log(response)
      }).catch(error => {
        console.error(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
