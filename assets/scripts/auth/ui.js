'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#message').text('Signed up successfully!')
  $('#sign-up input[type="email"]').val('')
  $('#sign-up input[type="password"]').val('')
}

const onSignUpFailure = responseData => {
  $('#message').text('Sign up failed')
}

const onSignInSuccess = responseData => {
  $('#message').text('Signed in successfully!')
  $('#signup-in').hide()
  $('#loggedin').removeClass('hidden')
  $('#game-options').removeClass('hidden')
  store.user = responseData.user
}

const onSignInFailure = responseData => {
  $('#message').text('Sign in failed')
}

const onChangePasswordSuccess = () => {
  $('#message').text('Password changed successfully!')
}

const onChangePasswordFailure = () => {
  $('#message').text('Unable to change password')
}

const onSignOutSuccess = () => {
  $('#message').text('Signed out successfully!')
  $('#signup-in').show()
  $('#game-board').addClass('hidden')
  $('#loggedin').addClass('hidden')
  $('#game-options').addClass('hidden')
}

const onSignOutFailure = () => {
  $('#message').text('Sign out failed')
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
