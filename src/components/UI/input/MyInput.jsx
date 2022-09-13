import React from 'react'
import classes from './MyInput.module.css'

// const MyInput = React.forwardRef((props, ref) => {
//   return (
//     <input ref={ref} className={classes.myInput} {...props}/>
//   )
// }) // Для неуправляемого компонента (хук useRef)

const MyInput = (props) => {
    return (
        <input className={classes.myInput} {...props}/>
    )
}

export default MyInput