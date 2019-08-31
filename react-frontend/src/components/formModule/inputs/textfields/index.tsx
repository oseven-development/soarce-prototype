/** @format */

import React from 'react'
import {TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import {ITextField} from '../../types'

// touched[id]
const _TextField = (props: ITextField) => {
  const {id, label, onChange, value, touched, errors, type, required} = props
  return (
    <TextField
      required={required ? required : false}
      id={id}
      name={id}
      helperText={touched[id] ? errors[id] : ''}
      error={touched[id] && Boolean(errors[id])}
      label={label}
      value={value}
      variant="outlined"
      type={type === 'string' ? '' : type}
      margin={'normal'}
      onChange={onChange.bind(null, id)}
      fullWidth
    />
  )
}
export default _TextField
