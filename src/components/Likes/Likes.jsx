import React from 'react'
import "./Likes.scss"
import LikeItem from './LikeItem/LikeItem'

export default function Likes({ isLoggedOut, setIsLoggedOut, userName }) {
    return (
        <div className='likesSection'>
            <div className="likesContent">
                <div className="likesHeading">
                    Likes
                </div>
                <div className="likesContainer">
                    <div className="likeItem">
                        <LikeItem />
                    </div>
                    <div className="likeItem">
                        <LikeItem />
                    </div>
                </div>
            </div>
        </div>
    )
}
