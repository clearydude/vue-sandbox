<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h2>Signup Page</h2>
    <form>
      <input id="email" type="text" name="email" placeholder="Email">
      <input id="password" type="password" name="password" placeholder="Password">
      <button @click="createUser" id="submit">Submit</button>
    </form>
  </div>
</template>


<style>
</style>


<script>
/* global $ */
import router from '../router'
export default {
  methods: {
    createUser (event) {
      let formData = {
        'email': $('#email').val(),
        'password': $('#password').val()
      }

      $.post('/users', formData, function (formData) {
        // redirect to user page? -- fake username for now
        router.push('/users/1')
      })
      .fail(function (data) {
        // alert of errors!
        router.push('/signup')
      })

      event.preventDefault()
    }
  }
}
</script>

