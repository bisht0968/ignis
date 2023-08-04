import React from 'react'
import "./CategoryItem.scss"

export default function CategoryItem({ title, svg }) {
    return (
        <div className='categoryItemSection'>
            <div className="categoryItemContent">
                <div className="categoryItemTitle">
                    {svg}{title}
                </div>
            </div>
        </div>
    )
}
