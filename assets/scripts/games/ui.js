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
  const games = responseData.games
  const complete = games.filter(game => game.over)
  $('#get-all-games').text(`You have started ${games.length} games and finished ${complete.length} of those games.`)
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onIndexFailure = responseData => {
  $('#get-all-games').text('Failed to get game stats')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onUpdateSuccess = responseData => {
  store.game = responseData.game
  if (!store.game.over) {
    $('#game-message').text(`Your turn, ${store.currentPlayer}!`)
  }
}

const onUpdateFailure = responseData => {
  $('#message').text('Failed to update')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onShowSuccess = responseData => {
  const gameId = responseData.game.id
  const moves = responseData.game.cells
  $('[data-cell-index=0]').text(`${moves[0]}`)
  $('[data-cell-index=1]').text(`${moves[1]}`)
  $('[data-cell-index=2]').text(`${moves[2]}`)
  $('[data-cell-index=3]').text(`${moves[3]}`)
  $('[data-cell-index=4]').text(`${moves[4]}`)
  $('[data-cell-index=5]').text(`${moves[5]}`)
  $('[data-cell-index=6]').text(`${moves[6]}`)
  $('[data-cell-index=7]').text(`${moves[7]}`)
  $('[data-cell-index=8]').text(`${moves[8]}`)
  $('#game-message').text('Showing game: ' + gameId)
  $('#game-board').removeClass('hidden')
  $('#message').addClass('success')
}

const onShowFailure = responseData => {
  $('#game-message').text('Failed to show game')
  $('#message').removeClass()
  $('#message').addClass('failure')
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
