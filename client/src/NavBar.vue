<template>
  <nav id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <span v-if="isLoggedIn">
      <router-link to="/profile">Profile</router-link> |
      <a @click="logout">Logout</a>
    </span>
    <span v-else>
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link>
    </span>
  </nav>
</template>
<script>
export default {
  name: 'NavBar',
  computed : {
    isLoggedIn : function() { return this.$store.getters.isAuthenticated }
  },
  methods: {
    async logout (){
      await this.$store.dispatch('LogOut')
      this.$router.push('/login')
    }
  },
}
</script>
<style>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
a:hover {
  cursor: pointer;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

