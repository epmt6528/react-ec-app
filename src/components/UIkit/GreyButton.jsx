import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.grey[300],
    fontSize: 16,
    height: 48,
    marginButton: 16,
    width: 256,
  },
}))

const GreyButton = (props) => {
  const classes = useStyles()

  return (
    <Button
      variant='contained'
      onClick={() => props.onClick()}
      className={classes.button}
    >
      {props.label}
    </Button>
  )
}

export default GreyButton
