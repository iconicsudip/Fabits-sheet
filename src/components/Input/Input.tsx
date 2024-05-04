import React from 'react'
import styles from './Input.module.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    
}

const Input = React.forwardRef<HTMLInputElement, Props>(({ className, ...props }, ref) => {
    const inputClass = className ? `${styles.input} ${className}` : styles.input
    return (
        <input type="text" {...props} className={inputClass} placeholder='Enter pan number' ref={ref} />
    )
})

export default Input