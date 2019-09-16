/** @format */

import * as Yup from 'yup' // for everything

export const createPromoterValidationSchema = Yup.object({
  name: Yup.string('Name des Promoter eingeben').required('Name ist erforderlich'),
  email: Yup.string('Email eingeben')
    .email()
    .required('Email ist erforderlich'),
  phoneNumber: Yup.string('Telefonnummer eingeben')
    .email()
    .required('Telefonnummer ist erforderlich'),
})
export const promoterValues: any = [
  {id: 'name', label: 'Name des Promoter', value: '', type: 'string', category: 'input', required: true},
  {id: 'email', label: 'Email', value: '', type: 'string', category: 'input', required: true, stepper: 1},
  {id: 'phoneNumber', label: 'Telefonnummer', value: '', type: 'string', category: 'input', required: true, stepper: 1},
]
