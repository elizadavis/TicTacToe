'use strict'
const store = require('../store')

const onCreateSuccess = responseData => {
  store.game = responseData.game
  console.log('success', responseData)
  $('#message').text('New Game')
  $('#message').removeClass()
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
  $('#message').html('')
  const games = responseData.games
  games.forEach(game => {
    $('#message').append(`<p>${game.id}</p>`)
  })
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
  const text = responseData.game
  $('#message').text('Updated ' + text)
  $('#message').removeClass()
  $('#message').addClass('success')
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
