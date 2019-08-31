/** @format */

import React from 'react'
import {Paper} from '../../components'
import FormikForm from '../../components/formModule/formik'
import {Typography} from '@material-ui/core'

interface IForm {
  title: string
  onSubmit: Function
  stepperValues?: string[]
  values: any
  validationSchema: any
}

const CForm = (props: IForm) => {
  const {title, onSubmit, stepperValues, values, validationSchema} = props
  return (
    <React.Fragment>
      <Paper>
        <Typography variant="h1">{title}</Typography>
        <FormikForm
          onSubmit={(values: any) => {
            onSubmit(values)
          }}
          stepperValues={stepperValues}
          type={stepperValues ? 'stepper' : 'default'}
          formValues={values}
          validationSchema={{validationSchema}}
        />
      </Paper>
    </React.Fragment>
  )
}

export default CForm
