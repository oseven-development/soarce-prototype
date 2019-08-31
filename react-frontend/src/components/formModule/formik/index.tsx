/** @format */

import React from 'react'
import {Formik, FormikActions, FormikProps, Field, FieldProps} from 'formik'
import {Form} from '../forms'
import StepperForm from '../forms/stepperFrom'

interface IFormik {
  value?: Object
  validationSchema: any
  onSubmit: Function
  type: 'stepper' | 'default'
  formValues: any
  classes?: any
  stepperValues?: string[]
}

const FormikForm = (props: IFormik) => {
  const {classes, formValues, validationSchema, onSubmit, type, stepperValues} = props
  const values = Object.assign({}, ...formValues.map((e: any) => ({[e.id]: e.value})))

  return (
    <React.Fragment>
      <Formik
        render={props =>
          type === 'default' ? (
            <Form {...props} formValues={formValues} />
          ) : (
            <StepperForm {...props} stepperValues={stepperValues} formValues={formValues} />
          )
        }
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
