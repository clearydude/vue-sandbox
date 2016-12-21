<template>
  <div id="login">
    <h2>Login</h2>
    <form action="/users">
      <input type="text" name="email" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <button>Submit</button>
    </form>
  </div>
</template>


<style>
  #login {
    padding: 50px;
  }
</style>


<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    }
  }
</script>

