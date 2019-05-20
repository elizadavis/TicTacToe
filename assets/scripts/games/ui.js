'use strict'
const store = require('../store')

const onCreateSuccess = responseData => {
  store.game = responseData.game
  $('#message').text('New Game')
  $('#game-board').removeClass('hidden')
}

const onCreateFailure = responseData => {
  $('#message').text('Failed to begin new game')
}

const onIndexSuccess = responseData => {
  const games = responseData.games
  const complete = games.filter(game => game.over)
  $('#get-all-games').text(`You have played ${complete.length} full games.`)
}

const onIndexFailure = responseData => {
  $('#get-all-games').text('Failed to get game stats')
}

const onUpdateSuccess = responseData => {
  store.game = responseData.game
  if (!store.game.over) {
    $('#game-message').text(`Your turn, ${store.currentPlayer}!`)
  }
}

const onUpdateFailure = responseData => {
  $('#message').text('Failed to update')
}

const onShowSuccess = responseData => {
  const gameId = responseData.game.id
  const moves = responseData.game.cells
  $('[data-cell-index=0]').html(`${moves[0]}`)
  $('[data-cell-index=1]').html(`${moves[1]}`)
  $('[data-cell-index=2]').html(`${moves[2]}`)
  $('[data-cell-index=3]').html(`${moves[3]}`)
  $('[data-cell-index=4]').html(`${moves[4]}`)
  $('[data-cell-index=5]').html(`${moves[5]}`)
  $('[data-cell-index=6]').html(`${moves[6]}`)
  $('[data-cell-index=7]').html(`${moves[7]}`)
  $('[data-cell-index=8]').html(`${moves[8]}`)
  $('#game-message').text('Showing game: ' + gameId)
  $('#get-game input[type="number"]').val('')
  $('#game-board').removeClass('hidden')
}

const onShowFailure = responseData => {
  $('#game-message').text('Failed to show game')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onShowSuccess,
  onShowFailure
}
