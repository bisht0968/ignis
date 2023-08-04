import React from 'react'
import "./Event.scss"
import { AiOutlineHeart } from "react-icons/ai"

export default function Event({ eventImage, eventTitle, eventDate, eventLocation }) {
    return (
        <div className='eventSection'>
            <div className="eventContent">
                <div className="eventImg">
                    <img src={eventImage} alt="" />
                </div>
                <div className="eventTitle">
                    {eventTitle}
                </div>
                <div className="eventDate">
                    {eventDate}
                </div>
                <div className="eventLocation">
                    {eventLocation}
                </div>
                <div className="eventLikeButton">
                    <AiOutlineHeart />
                </div>
            </div>
        </div>
    )
}
