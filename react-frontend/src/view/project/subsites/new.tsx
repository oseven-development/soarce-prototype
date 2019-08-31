/** @format */

import React from 'react'
import {Paper} from '../../../components'
import FormikForm from '../../../components/formModule/formik'
import * as Yup from 'yup' // for everything
import {Typography} from '@material-ui/core'

const validationSchema = Yup.object({
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
const values: any = [
  {id: 'surname', label: 'Vorname', value: '', type: 'string', category: 'input', required: true},
  {id: 'name', label: 'Name', value: '', type: 'string', category: 'input', required: true},
  {id: 'email', label: 'Email', value: '', type: 'string', category: 'input', required: true},
  {
    id: 'dateOfBirth',
    label: 'Geburtstag',
    value: new Date().toLocaleDateString(),
    type: 'date',
    category: 'date',
    required: true,
  },

  {id: 'age', label: 'Alter', value: '', type: 'number', category: 'input', required: true},
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
  },
]

const NewProject = (props: any) => {
  return (
    <React.Fragment>
      <Paper>
        <Typography variant="h1">Projekt hinzufügen</Typography>
        <FormikForm
          onSubmit={(values: any) => {
            console.log(values)
          }}
          formValues={values}
          validationSchema={{validationSchema}}
        />
      </Paper>
    </React.Fragment>
  )
}
export default NewProject
