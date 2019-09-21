/** @format */

'use strict'

import {editProject} from './utils/editProject'

module.exports.addRole = async (event, context, callback) => {
  try {
    await editProject(event.body.id)
  } catch (error) {
    console.log(error)
  }

  callback(null, event)
}
