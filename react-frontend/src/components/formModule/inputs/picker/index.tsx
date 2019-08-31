/** @format */

import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import {IDatePicker} from '../../types'

const DatePicker = (props: IDatePicker) => {
  const {type, label, required, id, touched, errors, value, onChange} = props
  return (
    <TextField
      required={required ? required : false}
      name={id}
      id={`${type}-${Math.random()}`}
      helperText={touched[id] ? errors[id] : ''}
      error={touched[id] && Boolean(errors[id])}
      label={label}
      type={type}
      value={value}
      variant="outlined"
      margin={'normal'}
      onChange={onChange.bind(null, id)}
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}
export default DatePicker
