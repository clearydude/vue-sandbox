import Vue from 'vue'
import signup from 'src/components/Signup'

let form

describe('Signup.vue', () => {
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

  it('should pass a bullshit test', () => {
    /* global $ */

    console.log(window.location.href)

    $.mockjax({
      url: '/users',
      type: 'POST',
      status: 200,
      responseText: {
        status: 'success'
      }
    })

    $('#submit').simulate('click')

    console.log(window.location.href)

    expect(1).to.equal(1)
  })
})
