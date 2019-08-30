/** @format */
import React from 'react'
import InputBase from '@material-ui/core/InputBase'
import {makeStyles} from '@material-ui/styles'
import {color} from '../../../assets/theme/color'

const useStyles = makeStyles({
  root: {},
  input: {
    backgroundColor: color.backgroundInput,
    flex: 1,
    borderRadius: 20,
    paddingLeft: 10,
    paddingTop: 5,
    width: 'calc(100% - 10px)',
  },
})

const Input = (props: any) => {
  const {text, onChange, multiline, placeholder, type} = props
  const classes = useStyles()
  function handleChange(event: any) {
    onChange(event.target.value)
  }
  return (
    <InputBase
      fullWidth={true}
      multiline={multiline}
      className={classes.input}
      onChange={handleChange}
      value={text}
      placeholder={placeholder}
      type={type}
      inputProps={{'aria-label': 'Search Google Maps'}}
      style={{padding: '4px 8px', width: 'calc(100% - 18px)'}}
    />
  )
}
export default Input
