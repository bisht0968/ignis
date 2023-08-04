import React from 'react'
import "./MoreEvents.scss"
import Events from '../Events/Events'

export default function MoreEvents({ events }) {
    return (
        <div className='moreEventsSection'>
            <div className="moreEventsContent">
                <Events Heading={"More Events"} events={events} />
                <div className="moreEventsSeeMoreButton">
                    <div className="button">
                        See more
                    </div>
                </div>
            </div>
        </div>
    )
}
