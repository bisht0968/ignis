import React, { useEffect } from 'react'
import "./Header.scss"
import { FiSearch } from "react-icons/fi"
import { BsChevronDown } from 'react-icons/bs'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai"

export default function Header({ userName, isLoggedIn, isLoggedOut, setIsLoggedOut, setIsLoggedIn }) {

    useEffect(() => {
        if (isLoggedIn) {
            setIsLoggedOut(false)
        } else {
            setIsLoggedOut(true)
        }
    }, [isLoggedIn])

    const [isHoveringOrganise, setIsHoveringOrganise] = useState(false);
    const [isHoveringHelp, setIsHoveringHelp] = useState(false);
    const [isHoveringUserName, setIsHoveringUserName] = useState(false);

    const handleMouseEnterOrganise = () => {
        setIsHoveringOrganise(true);
    };

    const handleMouseLeaveOrganise = () => {
        setIsHoveringOrganise(false);
    };
    const handleMouseEnterHelp = () => {
        setIsHoveringHelp(true);
    };

    const handleMouseLeaveHelp = () => {
        setIsHoveringHelp(false);
    };

    const handleMouseEnterUserName = () => {
        setIsHoveringUserName(true);
    };

    const handleMouseLeaveUserName = () => {
        setIsHoveringUserName(false);
    };

    const handleLogout = () => {
        setIsLoggedOut(true);
        setIsLoggedIn(false)
    };

    const navigate = useNavigate();

    return (
        <div className='headerSection'>
            <div className="headerContent">
                <div className="headerLeft">
                    <div className="headerLogo" onClick={() => {
                        navigate('/')
                    }}>
                        LOGO
                    </div>
                    <div className="headerSearch">
                        <FiSearch />
                        <input type="text" placeholder='Search Events' />
                    </div>
                </div>
                <div className="headerRight">
                    {isLoggedIn && <div className="likeSection section" onClick={() => navigate('likes/')}>
                        <AiOutlineHeart />
                        <div className="headerTitle " >
                            Likes
                        </div>
                    </div>}
                    <div className="section dropdown" onMouseEnter={handleMouseEnterOrganise}
                        onMouseLeave={handleMouseLeaveOrganise}>
                        <div className="headerTitle">
                            Organize
                        </div>
                        <BsChevronDown />
                        {isHoveringOrganise && <div className="showDropdown">
                            <div className="showDropdownItem">
                                Create Events
                            </div>
                            <div className="showDropdownItem">
                                Pricing
                            </div>
                            <div className="showDropdownItem">
                                Resources
                            </div>
                            <div className="showDropdownItem">
                                Contact Sales
                            </div>
                        </div>}
                    </div>
                    <div className="section dropdown" onMouseEnter={handleMouseEnterHelp}
                        onMouseLeave={handleMouseLeaveHelp}>
                        <div className="headerTitle"  >
                            Help
                        </div>
                        <BsChevronDown />
                        {isHoveringHelp && <div className="exceptionShowDropdown showDropdown">
                            <div className="showDropdownItem">
                                Find your tickets
                            </div>
                            <div className="showDropdownItem">
                                Contact an event organiser
                            </div>
                            <div className="showDropdownItem">
                                Visit the help center
                            </div>
                        </div>}
                    </div>
                    {isLoggedOut ? (<> <div className="section " onClick={() => navigate('login/')}>
                        <div className="headerTitle createEvent" >
                            Create an event
                        </div>
                    </div>
                        <div className="section " onClick={() => navigate('login/')}>
                            <div className="headerTitle" >
                                Log In
                            </div>
                        </div>
                        <div className="section " onClick={() => navigate('signup/')}>
                            <div className="headerTitle" >
                                Sign Up
                            </div>
                        </div>
                    </>)
                        :
                        (<>
                            <div className="userName" onMouseEnter={handleMouseEnterUserName}
                                onMouseLeave={handleMouseLeaveUserName}>
                                <AiOutlineUser />  {userName}
                                {isHoveringUserName &&
                                    <div className="userLogout" onClick={handleLogout} >
                                        Logout
                                    </div>
                                }
                            </div>
                        </>)}
                </div>
            </div>
        </div>
    )
}
