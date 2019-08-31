/** @format */

import React from 'react'
import Button from '@material-ui/core/Button'
import {IFormStepperElements} from '../types'
import FormField from '../inputs'
import {makeStyles} from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Typography from '@material-ui/core/Typography'
import FormContainer from '../layout/halfHalfForm'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

const StepperForm = (props: any) => {
  const {
    values,
    stepperValues,
    errors,
    touched,
    formValues,
    handleChange,
    isValid,
    setFieldTouched,
    handleSubmit,
  } = props

  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set())
  const change = (name: string, e: any) => {
    e.persist()
    handleChange(e)
    setFieldTouched(name, true, false)
  }
  function isStepOptional(step: number) {
    return stepperValues === 1
  }

  function isStepSkipped(step: number) {
    return skipped.has(step)
  }

  function handleNext() {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  function handleSkip() {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.")
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values())
      newSkipped.add(activeStep)
      return newSkipped
    })
  }

  function handleReset() {
    setActiveStep(0)
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} style={{marginTop: 8}}>
        {stepperValues.map((label: string, index: number) => {
          const stepProps: any = {}
          const labelProps: any = {}
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="subtitle2">Optional</Typography>
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>

      <form
        onSubmit={(e: any) => {
          e.preventDefault()
          e.stopPropagation()
          handleSubmit()
        }}>
        <FormContainer>
          {formValues
            ? formValues.map((element: IFormStepperElements) =>
                element.stepper - 1 === activeStep ? (
                  <FormField
                    key={element.id}
                    element={element}
                    errors={errors}
                    touched={touched}
                    values={values}
                    change={change}
                  />
                ) : null,
              )
            : null}
        </FormContainer>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          {activeStep === stepperValues.length - 1 ? (
            <React.Fragment>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Zurück
              </Button>
              <Button onClick={handleReset} color={'secondary'} className={classes.button}>
                Reset
              </Button>
              <Button type="submit" variant="contained" color="primary" disabled={!isValid}>
                Erstellen
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Zurück
              </Button>
              {isStepOptional(activeStep) && (
                <Button variant="contained" color="primary" onClick={handleSkip} className={classes.button}>
                  Überspringen
                </Button>
              )}

              <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
                {activeStep === stepperValues.length - 1 ? 'Erstellen' : 'Weiter'}
              </Button>
            </React.Fragment>
          )}
        </div>
      </form>
    </div>
  )
}

export default StepperForm
