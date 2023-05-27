import React from 'react';
import './Speakers.css';
import {speakerData} from '../../utils/data';
// import PageHeader from '../../components/PageHeader/PageHeader';

const Speakers = () => {
  return (
    <div className="flexbox speakers-container" id="#top">
        {/* <PageHeader title={'Speakers'} color={'#084f41'} /> */}
        <h1>Keynote Speaker & Panelists</h1>
      <div className="speaker-info-container grid-container">
        {speakerData.map((item, id)=> {
            return(
            <div className='speaker-content' key={id}>
                <div className="speaker-picture" style={{borderColor:item.color}}>
                    <img src={item.picture} alt='item-1' />
                </div>
                <div className='speaker-info'>
                    <p className='speaker-name'>{item.name}</p>
                    <span className='speaker-positon'>{item.JDC}</span>
                </div>
            </div>

            )   
        })}
     </div>
    </div>
  )
}

export default Speakers
