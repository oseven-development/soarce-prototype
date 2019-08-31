/** @format */

import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {_TextField, NativeSelect} from '../inputs'
import {IFormElements} from '../types'

export const Form = (props: any) => {
  const {values, errors, touched, formValues, handleChange, isValid, setFieldTouched, handleSubmit} = props
  const change = (name: string, e: any) => {
    e.persist()
    handleChange(e)
    setFieldTouched(name, true, false)
  }
  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault()
        e.stopPropagation()
        handleSubmit()
      }}>
      {formValues
        ? formValues.map((element: IFormElements) => (
            <_Formfield element={element} errors={errors} touched={touched} values={values} change={change} />
          ))
        : null}
      <Button type="submit" fullWidth variant="contained" color="primary" disabled={!isValid}>
        Submit
      </Button>
    </form>
  )
}

interface IFormField {
  element: IFormElements
  errors: any
  touched: any
  values: any
  change: Function
}

const _Formfield = (props: IFormField) => {
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
          required={element.required ? element.required : false}
        />
      )
    default:
      return <React.Fragment></React.Fragment>
      break
  }
}
