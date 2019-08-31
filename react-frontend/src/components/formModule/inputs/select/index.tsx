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
    margin: '16px 0px 8px 0px',
    minWidth: 120,
    width: '100%',
  },
  selectEmpty: {
    marginTop: 16,
  },
}))

const _NativeSelect = (props: any) => {
  const classes = useStyles()
  const {errors, required, variant, id, label, values, onChange} = props
  const [asyncValues, setAsyncValues] = React.useState([])
  React.useEffect(() => {
    const LoadData = async () => {
      const res = await values()
      setAsyncValues(res)
    }
    LoadData()
  }, [])
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
        {typeof values === 'function'
          ? asyncValues.map(({value, label}: any) => (
              <option key={label} value={value}>
                {label}
              </option>
            ))
          : values.map(({value, label}: any) => (
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
