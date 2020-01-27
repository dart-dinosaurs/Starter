import React from 'react'
import Landing from '@images/Landing2.jpg'
import LandingStyles from '@styles/Landing/LandingPage.module.scss'

const LandingPic = () => {
    return(
        <div className={LandingStyles.container}>
            <div className={LandingStyles.text}>
                <h1>UHN Inventory System</h1>
            </div>
            <div>
                <img className={LandingStyles.pic} src={Landing}></img>
            </div>
        </div>
    )
}

export default LandingPic