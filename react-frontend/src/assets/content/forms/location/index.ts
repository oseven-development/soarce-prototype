/** @format */

import * as Yup from 'yup' // for everything

export const createLocationValidationSchema = Yup.object({
  name: Yup.string('Enter a name').required('Name is required'),
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string('')
    .min(8, 'Password must contain at least 8 characters')
    .required('Enter your password'),
  confirmPassword: Yup.string('Enter your password')
    .required('Confirm your password')
    .oneOf([Yup.ref('password')], 'Password does not match'),
})
export const locationValues: any = [
  {id: 'surname', label: 'Vorname', value: '', type: 'string', category: 'input', required: true, stepper: 1},
  {id: 'name', label: 'Name', value: '', type: 'string', category: 'input', required: true, stepper: 1},
  {id: 'email', label: 'Email', value: '', type: 'string', category: 'input', required: true, stepper: 1},
  {
    id: 'dateOfBirth',
    label: 'Geburtstag',
    value: new Date().toLocaleDateString(),
    type: 'date',
    category: 'date',
    required: true,
    stepper: 1,
  },

  {id: 'age', label: 'Alter', value: '', type: 'number', category: 'input', required: true, stepper: 2},
  {
    id: 'promoter',
    label: 'Promoter auswählen',
    values: [
      {
        label: 'Max',
        value: 'id-1234',
      },
      {
        label: 'Philipp',
        value: 'id-12345',
      },
      {
        label: 'Sarah',
        value: 'id-4321',
      },
    ],
    category: 'select',
    required: true,
    stepper: 2,
  },
]
