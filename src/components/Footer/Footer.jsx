import React from 'react'
import './Footer.css';
import { footerMenuItems, socialMediaLinks } from '../../utils/data';
import logo_Black from '../../media/icons/Logo_Black.svg';
import Instagram from '../../media/icons/Instagram.svg';
import linkedin from '../../media/icons/linkedin.svg';
import youtube from '../../media/icons/youtube.svg';
import twitter from '../../media/icons/twitter.svg';
import gmail_logo from '../../media/icons/gmail_logo.svg';
import github from '../../media/icons/Github.svg';
import { NavHashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='brand-logo'>
        <NavHashLink  to="/#top">
            <img src={logo_Black} alt='gisfest_logo_white'/>
        </NavHashLink>
        </div>
        <ul className='footer-links flexbox'>
        {footerMenuItems.map((item,index) => {
                return (
                    <li key={index}>
                        <NavHashLink smooth to={item.url} className="footer-link">
                        {item.title}
                        </NavHashLink>
                        <span>{item.sign}</span>
                    </li>
                    
                )
            })}
        </ul>
        <div className='socialmedia-links flexbox'>
            {socialMediaLinks.map((links,id)=>{
                const {url,social} = links;
                return(
                <a href={url} key={id} target="_blank" rel="noreferrer noopener" className='socialmedia-link' >
                {social==='Gmail'&&<img src={gmail_logo} alt="gmail"/>}
                {social==='Youtube'&&<img src={youtube} alt="youtube"/>}
                {social==='Twitter'&&<img src={twitter} alt="twitter"/>}
                {social==='Instagram'&&<img src={Instagram} alt="instagram"/>}
                {social==='Linkedin'&&<img src={linkedin} alt="linkedin"/>}
                {social==='Github'&&<img src={github} alt="github"/>}
                </a>
                )
            })
            }
        </div>
        <div className='copyright-container'>
            <p>&copy; Copyright <strong><span>GISfest {new Date().getFullYear()}</span></strong>. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
