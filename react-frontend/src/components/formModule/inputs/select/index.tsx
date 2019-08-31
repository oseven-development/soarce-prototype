/** @format */

import React from 'react'
import {makeStyles} from '@material-ui/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import {ISelect} from '../../types'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: '8px 0px 8px 0px',
    minWidth: 120,
    width: '100%',
  },
  selectEmpty: {
    marginTop: 8,
  },
}))

const _NativeSelect = (props: ISelect) => {
  const {errors, required, variant, id, label, values, onChange} = props
  const classes = useStyles()
  return (
    <FormControl
      className={classes.formControl}
      //   variant={variant ? variant : 'outlined'}
      variant={'outlined'}
      required={required ? required : false}
      error={Boolean(errors[id]) ? true : false}>
      <InputLabel htmlFor={`${id}-native-select`}>{label}</InputLabel>
      <NativeSelect
        onChange={onChange.bind(null, id)}
        input={<OutlinedInput name={id} labelWidth={label.length * 9} id={`${id}-native-select`} />}>
        <option value="" />
        {values.map(({value, label}: any) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </NativeSelect>

      <FormHelperText>{errors ? errors[id] : null}</FormHelperText>
    </FormControl>
  )
}

export default _NativeSelect
