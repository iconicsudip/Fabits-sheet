import React from 'react'
import styles from './Button.module.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    buttonType?: "primary" | "secondary"
    block?: boolean
}

export default function Button({children,buttonType="primary",block,...props}:Props) {
    const buttonStyle = buttonType === "primary" ? styles.primary : styles.secondary
    return (
        <button {...props} className={`${buttonStyle} ${block ? styles.block:''}`}>
            {children}
        </button>
    )
}
