import Vue from 'vue'
import signup from 'src/components/Signin'

let form

describe('Signin.vue', () => {
  before(function () {
    // create a mount point for the signup component
    let signupMountPoint = document.createElement('div')
    document.body.appendChild(signupMountPoint)

    // extend the signup component so we can test it
    let Comp = Vue.extend(signup)
    form = new Comp({

    })

    form.$mount(signupMountPoint)
  })

  beforeEach(function () {
    $.mockjax.clear()
    $('#email').val('')
    $('#password').val('')
    form.email = ''
    form.sessionToken = ''
  })

  it('the form should submit valid values to the server', () => {
    /* global $ */
    let email = 'beealzebub@hotmail.com'
    let password = 'password666'
    let token = 666

    $('#email').val(email)
    $('#password').val(password)

    $.mockjax({
      url: '/users',
      type: 'POST',
      status: 200,
      dataType: 'json',
      responseText: {
        token: token,
        email: email
      },
      data: function (data) {
        expect(data.email).to.equal(email)
        expect(data.password).to.equal(password)
        return true
      }
    })

    $('#submit').simulate('click')
  })

  it('the form should set its token to the value returned by the server', () => {
    /* global $ */
    let email = 'satanslittlehelper@hotmail.com'
    let token = 187

    $.mockjax({
      url: '/users',
      type: 'POST',
      status: 200,
      dataType: 'json',
      responseText: {
        token: token,
        email: email
      }
    })

    $('#submit').simulate('click')

    expect(form.sessionToken).to.equal(token)
  })

  it('the form should set its email to the value returned by the server', () => {
    /* global $ */
    let email = 'blackphillip@hotmail.com'
    let token = 5150

    $.mockjax({
      url: '/users',
      type: 'POST',
      status: 200,
      dataType: 'json',
      responseText: {
        token: token,
        email: email
      }
    })

    $('#submit').simulate('click')

    expect(form.email).to.equal(email)
  })

  it('the form shouldn\'t set anything if the server returns an error', () => {
    /* global $ */
    let email = 'satanclause@hotmail.com'
    let token = 666

    $.mockjax({
      url: '/users',
      type: 'POST',
      status: 400,
      dataType: 'json',
      responseText: {
        token: token,
        email: email
      }
    })

    $('#submit').simulate('click')

    expect(form.email).to.equal('')
  })
})
