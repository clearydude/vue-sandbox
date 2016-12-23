<template>
  <div class="container">
    <p v-if="email">Hi, {{ email }}. Let's get your account created!</p>
      <form id="payment-form">

        <span class="alert alert-danger" v-if="error">{{ error }}</span>

        <div class="form-group">
          <label for="seats">Users</label>
            <input class="form-control" id="seats" type="number" size="2" min="1" value="1">
        </div>

        <fieldset class="form-group">
          <legend>Subscription Type</legend>
          <div class="form-check">
            <label class="form-check-label">
              <input type="radio" class="form-check-input" name="plan" value="standard">
              Standard
            </label>
            <label class="form-check-label">
              <input type="radio" class="form-check-input" name="plan" value="premium">
              Premium
            </label>
          </div>
        </fieldset>

        <div class="form-group">
          <label for="cc-number">Credit Card Number</label>
            <input class="form-control" id="cc-number" type="tel" size="16" data-stripe="number">
        </div>

        <label for="exp" class="col-xs-2 col-form-label">Exp</label>
        <div class="form-group" id="exp">
            <input class="form-control" type="tel" size="2" data-stripe="exp_month" placeholder="MM" id="month">
              /
          <input class="form-control" type="tel" size="2" data-stripe="exp_year" placeholder="YY">

          <label>
            <input class="form-control" type="text" size="3" data-stripe="cvc" placeholder="CVC">
          </label>
        </div>

        <div class="form-group">
          <label>
            <span>ZIP Code</span>
            <input class="form-control" type="text" size="6" data-stripe="address_zip">
          </label>
        </div>

        <button class="btn btn-md" @click="getToken">Subscribe</button>

      </form>
    </div>
</template>

<style scoped>

</style>

<script>
/* global $, Stripe */
import store from '../store'

$('#cc-number').payment('formatCardNumber')

console.log($('#cc-number').val())

export default {
  data () {
    return {
      token: '',
      error: ''
    }
  },
  computed: {
    email () {
      return store.state.userId
    }
  },
  methods: {
    getToken (event) {
      Stripe.card.createToken($('#payment-form'), this.stripeResponseHandler)
      event.preventDefault()
    },
    stripeResponseHandler (status, response) {
      if (response.error) {
        this.token = ''
        this.error = response.error.message
      } else {
        this.error = ''
        this.token = response.id
      }
    }
  }
}

</script>
