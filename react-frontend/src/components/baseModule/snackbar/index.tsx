/** @format */

import React from 'react'
import classNames from 'classnames'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import CloseIcon from '@material-ui/icons/Close'
import green from '@material-ui/core/colors/green'
import amber from '@material-ui/core/colors/amber'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import WarningIcon from '@material-ui/icons/Warning'
import {withStyles} from '@material-ui/core/styles'
import {SnackbarContext} from '../../../App'

const variantIcon: any = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
}

interface ISnackbar {
  classes?: any
  className?: any
  variant: any
  message: string
  open: boolean
  setOpen: any
}

const styles = (theme: any) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: 8,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  root: {
    marginBottom: 60,
  },
})

const _SnackBar = (props: any) => {
  const {classes, className} = props
  const {snackbar, setSnackbar}: any = React.useContext(SnackbarContext)
  const Icon = variantIcon[snackbar.variant]
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={snackbar.open}
      autoHideDuration={6000}
      onClose={() => {
        setSnackbar({...snackbar, open: !snackbar.open})
      }}
      className={classes.root}>
      <SnackbarContent
        className={classNames(classes[snackbar.variant], className)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={classNames(classes.icon, classes.iconVariant)} />
            {snackbar.message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={() => {
              setSnackbar({...snackbar, open: !snackbar.open})
            }}>
            <CloseIcon className={classes.icon} />
          </IconButton>,
        ]}
      />
      {/* <MySnackbarContentWrapper onClose={!open} variant={variant} message={message} /> */}
    </Snackbar>
  )
}

export default withStyles(styles)(_SnackBar)
