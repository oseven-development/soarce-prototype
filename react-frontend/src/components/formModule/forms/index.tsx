/** @format */

import React from 'react'
import Button from '@material-ui/core/Button'
import {IFormElements} from '../types'
import FormField from '../inputs'

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
            <FormField
              key={element.id}
              element={element}
              errors={errors}
              touched={touched}
              values={values}
              change={change}
            />
          ))
        : null}
      <Button type="submit" fullWidth variant="contained" color="primary" disabled={!isValid}>
        erstellen
      </Button>
    </form>
  )
}
