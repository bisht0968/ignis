import React from 'react'
import "./LikeItem.scss"
import Pic from "../../../assets/event1.jpeg"
import { AiTwotoneHeart } from "react-icons/ai"

export default function LikeItem() {
    return (
        <div className='likeItemSection'>
            <div className="likeItemContent">
                <div className="likeItemPhoto">
                    <img src={Pic} alt="" />
                </div>
                <div className="likeItemDescription">
                    <div className="likeItemTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, possimus?</div>
                    <div className="likeItemDate">
                        Tue,13 May,2023
                    </div>
                </div>
                <div className="likeItemButton">
                    <AiTwotoneHeart />
                </div>
            </div>
        </div>
    )
}
