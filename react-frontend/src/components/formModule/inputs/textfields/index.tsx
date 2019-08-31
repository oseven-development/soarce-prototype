/** @format */

import React from 'react'
import {TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: 4,
    marginRight: 4,
  },
  dense: {
    marginTop: 8,
  },
  menu: {
    width: 200,
  },
}))

interface ITextField {
  id: string
  label: string
  onChange: Function
  value: any
  touched: any
  errors: any
  type: string
  required?: boolean
}
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
