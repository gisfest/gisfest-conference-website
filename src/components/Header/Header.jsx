import React, {useEffect, useState} from 'react';
import './Header.css';
import { MenuItems } from '../../utils/data';
import logo_Black from '../../media/icons/Logo_Black.svg';
import { NavLink } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import { NavHashLink } from 'react-router-hash-link';


const Header = () => {
    const [click, setClick] = useState(false);
    const [fixHeader, setFixHeader] = useState(false);

    const fixHeaderOnScroll = () => {
      if(window.scrollY >= 6) {
        setFixHeader(true)
      }else{
        setFixHeader(false)
      }
    }

    useEffect(()=>{
      window.addEventListener("scroll", fixHeaderOnScroll);
    },[fixHeader])
   
  
    const handleClick = () =>setClick(!click);

  return (
    <div className={fixHeader ? 'navbar-container sticky': "navbar-container"}> 
        <NavHashLink smooth to="/#top" className='Nav_logo'>
            <img src={logo_Black} alt='gisfest_logo_white'/>
        </NavHashLink>
            <ul className={click ? "navbar-links active-nav-menu" : "navbar-links"}>
            {MenuItems.map((item,index) => {
                return (
                    <li key={index}>
                        <NavLink exact="true" to={item.url} onClick={handleClick} className={({ isActive : isNavActive }) => isNavActive ? "nav-link-active" : `${item.cName}`}>
                        {item.title}
                        </NavLink>  
                    </li>
                )
            })}
            
            {/* <div className='btn'>
                <button className='nav-btn' >
                  <a href="https://forms.gle/8i92Wr8wcDjRm7Zg9" rel="noreferrer" target={'blank_'}>
                  Register ➚
                  </a>
                </button>
            </div> */}
            </ul>
          <div className='nav-menu-mobile' onClick={handleClick} >
            {click ? <FaTimes className='Icon' /> : <FaBars className="Icon" />     } 
          </div>
    </div>
  )
}

export default Header
