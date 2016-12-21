<template>
  <v-app top-navbar>

    <main>
      <v-content>

      <v-alert error v-if="error">{{error}}</v-alert>
      <v-alert success v-if="token">{{token}}</v-alert>

      <form id="payment-form">

        <span class="payment-errors"></span>

        <div class="form-row">
          <label>
            <span>Users</span>
            <input name="seats" type="number" size="2" min="1" value="1">
          </label>
        </div>

        <div>
          <v-radio name="plan" value="standard" label="Standard"></v-radio>
          <v-radio name="plan" value="premium" label="Premium"></v-radio>
        </div>

        <div class="form-row">
          <label>
            <span>Card Number</span>
            <input type="tel" size="16" data-stripe="number">
          </label>
        </div>

        <div class="form-row">
          <label>
            <span>Exp</span>
            <input type="tel" size="2" data-stripe="exp_month" placeholder="MM">
          </label>
          <span> / </span>
          <input type="tel" size="2" data-stripe="exp_year" placeholder="YY">

          <label>
            <input type="text" size="3" data-stripe="cvc" placeholder="CVC">
          </label>
        </div>

        <div class="form-row">
          <label>
            <span>ZIP Code</span>
            <input type="text" size="6" data-stripe="address_zip">
          </label>
        </div>

        <button @click="getToken">Subscribe</button>

      </form>
        </v-content>
      </main>
    </v-app>
</template>

<style scoped>

</style>

<script>
/* global $, Stripe */
export default {
  data () {
    return {
      token: '',
      error: ''
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
