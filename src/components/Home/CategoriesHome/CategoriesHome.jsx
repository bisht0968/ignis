import React from 'react'
import "./CategoriesHome.scss"
import CategoryItem from './CategoryItem/CategoryItem'
import { BsMusicNoteBeamed } from "react-icons/bs"
import { PiMaskHappyThin } from "react-icons/pi"
import { MdOutlineHolidayVillage, MdOutlineBusinessCenter, MdSportsMartialArts } from "react-icons/md"
import { AiOutlineHeart } from "react-icons/ai"
import { FaGamepad } from "react-icons/fa"
import { BiDrink } from "react-icons/bi"

export default function CategoriesHome() {


    return (
        <div className='categoriesHomeSection'>
            <div className="categoriesHomeContent">
                <div className="categoriesHomeTitle">
                    Check out trending categories
                </div>
                <div className="categoriesHomeContainer">
                    <div className="categoriesHomeItem">
                        <CategoryItem title={"Music"} svg={<BsMusicNoteBeamed />} />
                    </div>
                    <div className="categoriesHomeItem">
                        <CategoryItem title={"Performing & Visual Arts"} svg={<PiMaskHappyThin />} />
                    </div>
                    <div className="categoriesHomeItem">
                        <CategoryItem title={"Holiday"} svg={<MdOutlineHolidayVillage />} />
                    </div>
                    <div className="categoriesHomeItem">
                        <CategoryItem title={"Health"} svg={<AiOutlineHeart />} />
                    </div>
                    <div className="categoriesHomeItem">
                        <CategoryItem title={"Hobbies"} svg={<FaGamepad />} />
                    </div>
                    <div className="categoriesHomeItem">
                        <CategoryItem title={"Business"} svg={<MdOutlineBusinessCenter />} />
                    </div>
                    <div className="categoriesHomeItem">
                        <CategoryItem title={"Food & Drink"} svg={<BiDrink />} />
                    </div>
                    <div className="categoriesHomeItem">
                        <CategoryItem title={"Sports & Fitness"} svg={<MdSportsMartialArts />} />
                    </div>
                </div>
            </div>
        </div>
    )
}
