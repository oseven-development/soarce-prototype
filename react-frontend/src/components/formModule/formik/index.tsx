/** @format */

import React from 'react'
import {Formik, FormikActions, FormikProps, Field, FieldProps} from 'formik'
import {Form} from '../forms'

interface IFormik {
  value?: Object
  validationSchema: any
  onSumbit: Function
}

const FormikForm = (props: any) => {
  const {classes, formValues, validationSchema, onSubmit} = props
  const values = Object.assign({}, ...formValues.map((e: any) => ({[e.id]: e.value})))
  return (
    <React.Fragment>
      <Formik
        render={props => <Form {...props} formValues={formValues} />}
        onSubmit={(values, {setSubmitting}) => {
          onSubmit(values)
          setSubmitting(false)
        }}
        initialValues={values}
        validationSchema={validationSchema}
      />
    </React.Fragment>
  )
}

export default FormikForm
