/** @format */

import _TextField from './textfields'
import NativeSelect from './select'
import {IFormField} from '../types'

import React from 'react'
import DatePicker from './picker'

const FormField = (props: IFormField) => {
  const {element, errors, touched, values, change} = props
  switch (element.category) {
    case 'input':
      return (
        <_TextField
          key={element.id}
          id={element.id}
          label={element.label}
          touched={touched}
          errors={errors}
          onChange={change}
          value={values[element.id]}
          type={element.type}
          required={element.required ? element.required : false}
        />
      )
    case 'select':
      return (
        <NativeSelect
          errors={errors}
          id={element.id}
          label={element.label}
          values={element.values}
          onChange={change}
          required={element.required ? element.required : false}
        />
      )
    case 'date':
      return (
        <DatePicker
          key={element.id}
          id={element.id}
          label={element.label}
          touched={touched}
          errors={errors}
          onChange={change}
          value={values[element.id]}
          type={element.type}
          required={element.required ? element.required : false}
        />
      )
    default:
      return <React.Fragment></React.Fragment>
  }
}

export default FormField
