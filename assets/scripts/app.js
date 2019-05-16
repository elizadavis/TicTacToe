'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const gameEvents = require('./games/events')
// const gameApi = require('./games/api')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#games-create').on('submit', gameEvents.onCreate)
  $('#games-index').on('submit', gameEvents.onIndex)
  $('.box').on('click', function (event) {
    console.log($(event.target).data('cell-index'))
  })
  $('#games-update').on('submit', gameEvents.onUpdate)
})
