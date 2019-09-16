/** @format */

import {Project} from '../models/project'
import {mapper} from '../service/database'

export const editProject = async (id: string) => {
  const myItem = await mapper.get(Object.assign(new Project(), {id}))
  myItem.state = 'bestätigt'

  await mapper.update(myItem)
}
