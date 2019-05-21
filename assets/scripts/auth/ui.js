'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#message').text('signed up successfully!')
  $('#sign-up input[type="email"]').val('')
  $('#sign-up input[type="password"]').val('')
  $('#game-message').text('')
}

const onSignUpFailure = responseData => {
  $('#message').text('sign up failed')
  $('#sign-up input[type="email"]').val('')
  $('#sign-up input[type="password"]').val('')
  $('#game-message').text('')
}

const onSignInSuccess = responseData => {
  $('#message').text('signed in - click "new game" to play!')
  $('#signup-in').hide()
  $('#loggedin').removeClass('hidden')
  $('#game-options').removeClass('hidden')
  $('#game-board').removeClass('hidden')
  $('#sign-in input[type="email"]').val('')
  $('#sign-in input[type="password"]').val('')
  $('#game-message').text('')
  store.user = responseData.user
}

const onSignInFailure = responseData => {
  $('#message').text('sign in failed')
  $('#sign-in input[type="email"]').val('')
  $('#sign-in input[type="password"]').val('')
  $('#game-message').text('')
}

const onChangePasswordSuccess = () => {
  $('#message').text('password changed successfully!')
  $('#change-pw input[type="password"]').val('')
  $('#game-message').text('')
}

const onChangePasswordFailure = () => {
  $('#message').text('unable to change password')
  $('#change-pw input[type="password"]').val('')
}

const onSignOutSuccess = () => {
  $('#message').text('signed out successfully')
  $('#signup-in').show()
  $('#game-board').addClass('hidden')
  $('#loggedin').addClass('hidden')
  $('#game-options').addClass('hidden')
  $('#game-message').text('thanks for playing!')
}

const onSignOutFailure = () => {
  $('#message').text('sign out failed')
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
