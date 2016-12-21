<template>
  <div>
      <ul>
          <router-link v-for="item in items" :to="item.href"><li>{{item.text}}</li></router-link>
      </ul>
          <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      items: [
        { text: 'Subscribe', href: '/subscribe' },
        { text: 'Login', href: '/login' },
        { text: 'Signup', href: '/signup' },
        { text: 'User', href: '/users' },
        { text: 'Home', href: '/home' }
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
