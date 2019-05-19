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
  const games = responseData.games
  const complete = games.filter(game => game.over)
  $('#get-all-games').text(`You have started ${games.length} games and finished ${complete.length} of those games.`)
  $('#game-board').removeClass('hidden')
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

const onShowSuccess = responseData => {
  console.log('success', responseData)
  const gameId = responseData.game.id
  const moves = responseData.game.cells
  $('#0').text(`${moves[0]}`)
  $('#1').text(`${moves[1]}`)
  $('#2').text(`${moves[2]}`)
  $('#3').text(`${moves[3]}`)
  $('#4').text(`${moves[4]}`)
  $('#5').text(`${moves[5]}`)
  $('#6').text(`${moves[6]}`)
  $('#7').text(`${moves[7]}`)
  $('#8').text(`${moves[8]}`)
  $('#show-game').text('Showing example: ' + gameId)
  $('#game-board').removeClass('hidden')
  $('#message').addClass('success')
}

const onShowFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Failed to get :(')
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
