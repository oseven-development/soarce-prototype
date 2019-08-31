/** @format */

import * as Yup from 'yup' // for everything

export const createLocationValidationSchema = Yup.object({
  name: Yup.string('Name für die Location eingeben').required('Name ist erforderlich'),
  city: Yup.string('Stadt eingeben').required('Email is required'),
})
export const locationValues: any = [
  {id: 'name', label: 'Name der Location', value: '', type: 'string', category: 'input', required: true},
  {id: 'city', label: 'Stadt', value: '', type: 'string', category: 'input', required: true, stepper: 1},
]
