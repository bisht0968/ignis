import React from 'react'
import "./Home.scss"
import Banner from './Banner/Banner'
import CategoriesHome from './CategoriesHome/CategoriesHome'
import EventsContainer from './EventsContainer/EventsContainer'

export default function Home({ heading }) {

    return (
        <>
            <div className='homeSection'>
                <div className="homeContent">
                    <Banner />
                    <CategoriesHome />
                    <EventsContainer Heading={heading} />
                </div>
            </div>
        </>
    )
}
