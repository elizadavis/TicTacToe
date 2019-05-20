'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#message').text('signed up successfully!')
  $('#sign-up input[type="email"]').val('')
  $('#sign-up input[type="password"]').val('')
}

const onSignUpFailure = responseData => {
  $('#message').text('sign up failed')
}

const onSignInSuccess = responseData => {
  $('#message').text('signed in successfully!')
  $('#signup-in').hide()
  $('#loggedin').removeClass('hidden')
  $('#game-options').removeClass('hidden')
  $('#game-board').removeClass('hidden')
  store.user = responseData.user
}

const onSignInFailure = responseData => {
  $('#message').text('sign in failed')
}

const onChangePasswordSuccess = () => {
  $('#message').text('password changed successfully!')
}

const onChangePasswordFailure = () => {
  $('#message').text('unable to change password')
}

const onSignOutSuccess = () => {
  $('#message').text('signed out successfully!')
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
