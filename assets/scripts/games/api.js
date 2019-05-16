'use strict'
const config = require('../config')
const store = require('../store')

const create = formData => {
  console.log('from api create')
  console.log('store is', store)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: formData,
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

const update = responseData => {
  const id = store.game.id
  return $.ajax({
    url: config.apiUrl + '/games/' + id,
    method: 'PATCH',
    data: {
      'game': {
        'id': 9780,
        'cells': ['', '', '', '', '', '', '', '', ''],
        'over': false,
        'player_x': {
          'id': 1,
          'email': 'eliza@eliza'
        },
        'player_o': null
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  create,
  index,
  update
}
