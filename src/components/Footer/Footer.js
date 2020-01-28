import React from 'react'

import FooterStyles from '@styles/Footer/Footer.module.scss'

const Footer = () => {
    return(
        <div className={FooterStyles.container}>
            <div className={FooterStyles.textContainer}>
                <h1>UHN Inventory System</h1>
                <h2>Made with Love by the solutions team</h2>
            </div>
        </div>
    )
}

export default Footer