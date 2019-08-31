/** @format */

import React from 'react'
import clsx from 'clsx'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice'
import Icon from '@material-ui/core/Icon'
import SaveIcon from '@material-ui/icons/Save'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}))

interface IButton {
  onClick: any
  color?: 'default' | 'inherit' | 'primary' | 'secondary'
  icon?: JSX.Element
  text: string
  variant?: 'text' | 'outlined' | 'contained'
  size?: 'small' | 'medium' | 'large'
}

const NormalButton = (props: IButton) => {
  const classes = useStyles()
  const {text, icon, onClick, color, size, variant} = props
  return (
    <React.Fragment>
      <Button
        variant={variant ? variant : 'text'}
        size={size ? size : 'medium'}
        color={color ? color : 'default'}
        className={classes.button}
        onClick={onClick}>
        {text}
        {icon ? icon : null}
        {/* <DeleteIcon className={classes.rightIcon} /> */}
      </Button>
    </React.Fragment>
  )
}
export default NormalButton
