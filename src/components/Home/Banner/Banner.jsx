import React from 'react'
import "./Banner.scss"
import BannerPoster from "../../../assets/banner.webp"

export default function Banner() {
    return (
        <div className='bannerSection'>
            <div className="bannerContent">
                <div className="bannerPoster">
                    <img src={BannerPoster} alt="" />
                </div>
                <div className="bannerCTA">
                    <div className="bannerButton">
                        Find your next event
                    </div>
                </div>
            </div>
        </div>
    )
}
