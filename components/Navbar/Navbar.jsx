import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
 
    <nav className="navbar">
        <div className="firstRow">
            <div className="logo-container"> 
                <img src="/images/Logo.svg" alt="Example" />
            </div>
         
            <div className="navbarRight">  
                <img src="/images/search-normal.svg" alt="search-image"/>
                <img src="/images/heart.svg" alt="heart-image" />
                <img src="/images/shopping-bag.svg" alt="shopping-bag-image" />
                <img src="/images/profile.svg" alt="profile-image" />
                <div className="language">
                    <h5>ENG</h5>
                    <img src="/images/arrow-left.svg" alt="Example" />
                </div>
            </div>
        </div>
        <div className='logo'><h2>LOGO</h2></div>
       
        <div className="secondRow">
            <ul className="list">
                <li>SHOP</li>
                <li>SKILLS</li>
                <li>STORIES</li>
                <li>ABOUT</li>
                <li>CONTACT US</li>
            </ul>
        </div>
    </nav>
 

  )
}

export default Navbar