import React from 'react'

import Header from './header'
import Footer from './footer'

import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

function Layout(props) {
    return (
        <div className={layoutStyles.layout}>
            <Header />
                { props.children }
            <Footer />
        </div>
    )
}

export default Layout
