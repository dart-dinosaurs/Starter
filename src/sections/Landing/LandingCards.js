import React from 'react'

import LandingStyles from '@styles/Landing/LandingCard.module.scss'

import Card from '@components/landing/Card'
import Pic1 from '@images/testtubes.jpg'
import Pic3 from '@images/manage.jpg'
import Pic2 from '@images/clipboard.jpg'

const Cards = () =>{
    return(
        <div className={LandingStyles.imgContainer}>
            {CardInfo.map((card) => {
                return(
                    <Card information={card}/>
                )
            })}
        </div>
    )
}

const CardInfo = [
    {
        Image: Pic1,
        Heading: "Find",
        Blurb: "Obtain whatever you would like to add to the system"
    },
    {
        Image: Pic2,
        Heading: "Record",
        Blurb: "Scan the item using the mobile app"
    },
    {
        Image: Pic3,
        Heading: "View",
        Blurb: "See and manage your items through the web app!"
    }
]

export default Cards