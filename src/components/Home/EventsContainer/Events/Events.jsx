import React from 'react'
import "./Events.scss"
import Event from './Event/Event'
import { useNavigate } from 'react-router-dom'

export default function Events({ Heading, events }) {

    const navigate = useNavigate();

    return (
        <div className='eventsSection'>
            <div className='eventsContent'>
                <div className="eventsTitle">
                    {Heading}
                </div>
                <div className="eventsContainer">
                    {events.map((event, i) => (
                        <div key={i} className="eventsEvent" onClick={() => {
                            navigate('/login')
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}>
                            <Event eventImage={event.image} eventTitle={event.event_name} eventDate={event.time} eventLocation={event.location} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
