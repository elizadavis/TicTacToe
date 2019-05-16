'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreate = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.create(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onIndex = event => {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}
const onUpdate = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.update(formData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

module.exports = {
  onCreate,
  onIndex,
  onUpdate
}
