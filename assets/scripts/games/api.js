'use strict'
const config = require('../config')
const store = require('../store')

const create = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: {},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const index = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = cell => {
  const id = store.game.id
  return $.ajax({
    url: config.apiUrl + '/games/' + id,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': cell,
          'value': store.currentPlayer
        },
        'over': store.game.over
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const show = formData => {
  const id = formData.game.id
  return $.ajax({
    url: config.apiUrl + '/games/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  create,
  index,
  update,
  show
}
