import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

function Header() {
    return (
        <header className={headerStyles.header}>
            <ul>
                <li><Link className={headerStyles.link} to='/'>Home</Link></li>
                <li><Link className={headerStyles.link} to='/about'>About</Link></li>
                <li><Link className={headerStyles.link} to='/blog'>Blog</Link></li>
            </ul>
        </header>
    )
}

export default Header
