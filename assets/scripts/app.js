'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const gameEvents = require('./games/events')
// const gameApi = require('./games/api')
// const store = require('../store')

let currentPlayer = 'x'

const gameBoard = ['', '', '', '', '', '', '', '', '']

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
  $('.box').on('click', function (event) {
    const cell = ($(event.target).data('cell-index'))
    gameBoard[cell] = currentPlayer
    if (currentPlayer === 'x') {
      currentPlayer = 'o'
    } else {
      currentPlayer = 'x'
    }
    console.log(gameBoard)
    $(event.target).text(`${currentPlayer}`)
    // console.log(store)
  })
  $('#games-update').on('submit', gameEvents.onUpdate)
})

const checkForWin = function () {
  if (gameBoard[0] && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
    return true
  } else if (gameBoard[0] && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
    return true
  } else if (gameBoard[0] && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
    return true
  } else if (gameBoard[1] && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
    return true
  } else if (gameBoard[2] && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
    return true
  } else if (gameBoard[2] && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
    return true
  } else if (gameBoard[3] && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
    return true
  } else if (gameBoard[6] && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
    return true
  }
}
console.log(checkForWin())

// const gamePlay = function () {
//   $(() => {
//     $('.box').on('click', function (event) {
//       console.log($(event.target).data('cell-index'))
//     })
//     $('.box').on('click', function (event) {
//       const cell = ($(event.target).data('cell-index'))
//       gameBoard[cell] = currentPlayer
//       console.log(gameBoard)
//     })
//   })
//   const cell = ($(event.target).data('cell-index'))
//   if (!gameBoard[cell]) {
//     $(event.target).text('currentPlayer')
//   }
//   checkForWin()
// }
//
// console.log(gamePlay())
