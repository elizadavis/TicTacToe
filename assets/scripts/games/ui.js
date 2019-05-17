'use strict'
const store = require('../store')

const onCreateSuccess = responseData => {
  store.game = responseData.game
  console.log('success', responseData)
  $('#message').text('New Game')
  $('#message').removeClass()
  $('#game-board').removeClass('hidden')
  $('#message').addClass('success')
}

const onCreateFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Failed to begin new game')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onIndexSuccess = responseData => {
  console.log('success', responseData)
  // const games = responseData.games
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onIndexFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Failed to get all games')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onUpdateSuccess = responseData => {
  store.game = responseData.game
  console.log('success', responseData)
}

const onUpdateFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Failed to update')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onUpdateSuccess,
  onUpdateFailure
}
