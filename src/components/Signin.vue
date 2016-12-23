<template>
  <div class="container">
    <h2>Signin Page</h2>
    <div class="alert alert-danger" v-if="error">{{error}}</div>
    <form>
      <div class="form-group row">
        <input class="form-control" id="email" type="text" name="email" placeholder="Email">
        <input class="form-control" id="password" type="password" name="password" placeholder="Password">
      </div>
    </form>
      <div class="row">
        <button @click.prevent="createUser" id="submit" class="btn btn-md">Submit</button>
      </div>

        <!-- for testing single page flow -->
    <hr>
      <div class="row">
        <button @click.prevent="fakeLogin" class="fakeButton btn btn-md btn-danger">Fake Login Success</button>
        <button @click.prevent="fakeSignup" class="fakeButton btn btn-md btn-danger">Fake Signup New User</button>
      </div>
  </div>
</template>


<style>
.fakeButton {
  padding: 5px 10px;
}

</style>

<script>
/* global $ */
import router from '../router'
import store from '../store'

export default {
  data () {
    return {
      error: '',
      email: '',
      sessionToken: '',
      userId: ''
    }
  },
  methods: {
    createUser (event) {
      let self = this

      // grab the data from the form
      let formData = {
        'email': $('#email').val(),
        'password': $('#password').val()
      }

      // on submit, we should clear out any previous errors probably
      self.error = ''

      // send the request
      $.ajax({
        type: 'POST',
        url: '/users',
        data: formData,
        dataType: 'json',
        async: false, // this should not be false tho...
        success: function (response) {
          self.sessionToken = response.token
          self.email = response.email
          store.dispatch('UPDATE_TOKEN', response.token)
          store.dispatch('UPDATE_ID', response.email)
          // log user in to application
          router.push('/users/' + self.userId)
        },
        error: function (data) {
          if (data.status === 400) {
            self.error = 'Validation errors. Please try again.'
          } else if (data.status === 409) {
            self.error = 'Email is unavailable. Please try again'
            // tell user account is registered and show them link to reset password
          } else {
            self.error = 'Something weird and bad happened. Please try again'
          }
        }
      })

      // get path from router
      console.log(this.$route.path)
      // don't need this
     // event.preventDefault()
    },
    // testing SPA only
    fakeLogin (event) {
      let username = $('#email').val()
      store.commit('UPDATE_ID', username)
      router.push('/users/' + username)
    },
    fakeSignup (event) {
      let username = $('#email').val()
      store.commit('UPDATE_ID', username)
      router.push('/subscribe')
    }
  }
}
</script>

