import React from 'react'

import LandingStyles from '@styles/Landing/LandingCard.module.scss'

const Card = (props) => {
    console.log(props)
    return(
        <div className={LandingStyles.container}>
            <div className={LandingStyles.imgContainer}>
                <img className={LandingStyles.pic} src={props.information.Image}></img>
            </div>
            <div className={LandingStyles.heading}>
                <h1>{props.information.Heading}</h1>
                <p>{props.information.Blurb}</p>
            </div>
        </div>
    )
}

export default Card