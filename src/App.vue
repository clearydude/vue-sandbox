<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <h2 class="navbar-brand">
          Totally Not Fake Licensing App
        </h2>
        <ul class="nav navbar-nav">
            <router-link v-for="item in items" :to="item.href"><li>{{item.text}}</li></router-link>
        </ul>
      </div>
    </nav>

    <div class="container">
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      sessionToken: '',
      userId: '',
      items: [
        { text: 'Subscribe', href: '/subscribe' },
        { text: 'Login', href: '/login' },
        { text: 'User', href: '/users' },
        { text: 'Home', href: '/' }
      ]
    }
  }
}
</script>

<style>
  li {
    padding: 30px;
    display: inline;
  }

</style>
