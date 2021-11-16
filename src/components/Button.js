import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const STYLE = ['btn--primary', 'btn--outline']
const SIZE = ['btn-medium', 'btn-large']

export const Button = ({ buttonStyle ,buttonSize ,children,onClick,type}) => {
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0]
    const checkButtonSize=SIZE.includes(buttonSize)?buttonSize:SIZE[0]
    return (
        <div>
            <Link to='sign-up' className='btn--mobile'>
                <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                    {children}
                </button>
            </Link>
        </div>
    )
}


