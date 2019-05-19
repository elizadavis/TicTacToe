'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

store.currentPlayer = 'x'
const turnCounter = []

const onCreate = () => {
  event.preventDefault()
  $('.box').text('')
  $('#game-message').text('')
  turnCounter.length = 0
  api.create()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onIndex = event => {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShow = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.show(formData)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

const checkForXWin = function () {
  const gArray = store.game.cells
  if (gArray[0] && gArray[0] === gArray[1] && gArray[0] === gArray[2] && gArray[2] === 'x') {
    return true
  } else if (gArray[0] && gArray[0] === gArray[4] && gArray[0] === gArray[8] && gArray[8] === 'x') {
    return true
  } else if (gArray[0] && gArray[0] === gArray[3] && gArray[0] === gArray[6] && gArray[6] === 'x') {
    return true
  } else if (gArray[1] && gArray[1] === gArray[4] && gArray[1] === gArray[7] && gArray[7] === 'x') {
    return true
  } else if (gArray[2] && gArray[2] === gArray[5] && gArray[2] === gArray[8] && gArray[8] === 'x') {
    return true
  } else if (gArray[2] && gArray[2] === gArray[4] && gArray[2] === gArray[6] && gArray[6] === 'x') {
    return true
  } else if (gArray[3] && gArray[3] === gArray[4] && gArray[3] === gArray[5] && gArray[5] === 'x') {
    return true
  } else if (gArray[6] && gArray[6] === gArray[7] && gArray[6] === gArray[8] && gArray[8] === 'x') {
    return true
  }
}

const checkForOWin = function () {
  const gArray = store.game.cells
  if (gArray[0] && gArray[0] === gArray[1] && gArray[0] === gArray[2] && gArray[2] === 'o') {
    return true
  } else if (gArray[0] && gArray[0] === gArray[4] && gArray[0] === gArray[8] && gArray[8] === 'o') {
    return true
  } else if (gArray[0] && gArray[0] === gArray[3] && gArray[0] === gArray[6] && gArray[6] === 'o') {
    return true
  } else if (gArray[1] && gArray[1] === gArray[4] && gArray[1] === gArray[7] && gArray[7] === 'o') {
    return true
  } else if (gArray[2] && gArray[2] === gArray[5] && gArray[2] === gArray[8] && gArray[8] === 'o') {
    return true
  } else if (gArray[2] && gArray[2] === gArray[4] && gArray[2] === gArray[6] && gArray[6] === 'o') {
    return true
  } else if (gArray[3] && gArray[3] === gArray[4] && gArray[3] === gArray[5] && gArray[5] === 'o') {
    return true
  } else if (gArray[6] && gArray[6] === gArray[7] && gArray[6] === gArray[8] && gArray[8] === 'o') {
    return true
  }
}

const checkForDraw = function () {
  if (!checkForOWin() && !checkForXWin() && turnCounter.length >= 8) {
    return true
  }
}

const onBoxClick = event => {
  event.preventDefault()
  const cell = ($(event.target).data('cell-index'))
  turnCounter.push(cell)
  if (!store.game.cells[cell]) {
    store.game.cells[cell] = store.currentPlayer
    $(event.target).text(`${store.currentPlayer}`)
    if (checkForXWin()) {
      $('#game-message').text('x wins!')
      store.game.over = true
    }
    if (checkForOWin()) {
      $('#game-message').text('o wins!')
      store.game.over = true
    }
    if (checkForDraw()) {
      $('#game-message').text('Draw - no winner')
      store.game.over = true
    }
    api.update(cell)
      .then(ui.onUpdateSuccess)
      .then(store.currentPlayer = store.currentPlayer === 'x' ? 'o' : 'x')
      .catch(ui.onUpdateFailure)
  } else {
    $('#game-message').text('space already marked')
  }
}

module.exports = {
  onCreate,
  onIndex,
  onShow,
  onBoxClick
}
