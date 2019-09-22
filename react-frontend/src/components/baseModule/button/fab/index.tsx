/** @format */

import React from 'react'
import {makeStyles} from '@material-ui/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles(theme => ({
  fab: {
    margin: 8,
  },
  extendedIcon: {
    marginRight: 8,
  },
}))

interface IFabProps {
  onClick: any
  color?: 'primary' | 'secondary'
  addButton?: true
  icon?: JSX.Element
}

const FabButton = (props: IFabProps) => {
  const classes = useStyles()
  const {onClick, color, addButton, icon} = props

  return (
    <React.Fragment>
      <Fab
        color={color ? color : 'primary'}
        aria-label="add"
        onClick={onClick}
        className={classes.fab}
        style={addButton ? {position: 'absolute', bottom: 70, right: 15} : {boxShadow: 'none'}}>
        {icon ? icon : <AddIcon />}
      </Fab>
    </React.Fragment>
  )
}
export default FabButton
