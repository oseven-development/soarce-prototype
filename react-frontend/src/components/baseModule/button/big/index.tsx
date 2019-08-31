/** @format */

import React from 'react'
import {Button, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import Paper from '../../paper'
import {Flex, Box} from 'rebass'

const useStyles = makeStyles((theme: any) => ({
  root: {
    margin: 4,
    textTransform: 'none',
    padding: 0,
  },
}))

const Bigbutton = (props: any) => {
  const {icon, text, onClick, width, height} = props
  const classes = useStyles()

  return (
    <Button
      component="span"
      className={classes.root}
      fullWidth={window.innerWidth < 640 ? true : false}
      onClick={onClick}>
      <Paper height={height ? height : '15vh'}>
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          style={{
            width: width ? (window.innerWidth < 640 ? '100%' : width) : '100%',
            height: '100%',
          }}>
          <Box style={{display: 'flex', justifyContent: 'center'}}>{icon}</Box>
          <Box>
            <Typography variant="h2">{text}</Typography>
          </Box>
        </Flex>
      </Paper>
    </Button>
  )
}
export default Bigbutton
