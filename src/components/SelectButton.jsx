import { makeStyles } from '@material-ui/core'
import React from 'react'

const SelectButton = ({children, selected, onClick}) => {
    const useStyles = makeStyles({
       selectbutton:{
        borderRadius: 5,
        border: '1px solid gold',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: 'montserrat',
        cursor: 'pointer',
        backgroundColor: selected ? 'gold' : '',
        fontWeight: selected ? 700 : 500,
        "&:hover" : {
            backgroundColor: 'gold',
            color: 'black',
        },
        width: '22%',
       }
    });

    const classes = useStyles();
  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  )
}

export default SelectButton
