/** @format */

import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import _TextField from '../inputs/textfields'
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
            <_TextField
              key={element.id}
              id={element.id}
              label={element.label}
              touched={touched}
              errors={errors}
              onChange={change}
              value={values[element.id]}
              type={element.type}
            />
          ))
        : null}

      <Button type="submit" fullWidth variant="contained" color="primary" disabled={!isValid}>
        Submit
      </Button>
    </form>
  )
}
