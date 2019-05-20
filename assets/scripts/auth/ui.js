'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up input[type="email"]').val('')
  $('#sign-up input[type="password"]').val('')
}

const onSignUpFailure = responseData => {
  $('#message').text('Sign up failed')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onSignInSuccess = responseData => {
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#signup-in').hide()
  $('#loggedin').removeClass('hidden')
  $('#game-options').removeClass('hidden')
  store.user = responseData.user
}

const onSignInFailure = responseData => {
  $('#message').text('Sign in failed')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onChangePasswordSuccess = () => {
  $('#message').text('Password changed successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onChangePasswordFailure = () => {
  $('#message').text('Unable to change password')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onSignOutSuccess = () => {
  $('#message').text('Signed out successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#signup-in').show()
  $('#game-board').addClass('hidden')
  $('#loggedin').addClass('hidden')
  $('#game-options').addClass('hidden')
}

const onSignOutFailure = () => {
  $('#message').text('Sign out failed')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
