import React from 'react'
import './TeamCard.css';
import linkedin from '../../media/icons/linkedin.svg';
import twitter from '../../media/icons/twitter.svg';



const TeamCard = (props) => {
  return (
    <div >
        <div className='card'>
            <img src={props.img} alt={props.name} />
        </div>
        <div className='team-member-container'>
            <p>{props.name}</p>
            <div className='social-media flexbox'>
                <a href={props.linkedin_link}  rel="noreferrer noopener"  >
                    <img src={linkedin} alt="linkedin icon"/>
                </a>
                <a href={props.twitter_link} rel="noreferrer noopener"  >
                     <img src={twitter} alt="twitter icon"/>
                </a>
            </div>
        </div> 
    </div>
  )
}

export default TeamCard
