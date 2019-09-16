/** @format */

import {User} from '../models/project'
import {mapper} from '../service/database'

export const createUser = (args: User) => {
  const toSave = Object.assign(new User(), args)
  return mapper
    .put(toSave)
    .then(objectSaved => {
      return objectSaved
    })
    .catch(err => {
      return err
    })
}
