/** @format */

import React from 'react'
import {makeStyles} from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme: any) => ({
  root: {
    maxWidth: 900,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 18,
    margin: '10px',
  },
}))

const _Paper = (props: any) => {
  const classes = useStyles()
  const {children, height, padding} = props
  return (
    <Paper className={classes.root} style={{height: height ? height : '', padding: padding ? padding : ''}}>
      {children}
    </Paper>
  )
}
export default _Paper
