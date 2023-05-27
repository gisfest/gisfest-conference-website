import React from 'react';
import './Schedule.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import { BiPlayCircle } from "react-icons/bi";
import { agendaData } from '../../utils/data';
import SEO from '../SEO';

const Schedule = () => {


  return (
    <div className="main-content" id="#top">
      <SEO title={'Conference Schedule -- GIS Festival 2022'} url={'https://gisfest.org/schedule'} />
      <PageHeader title={'2022 Conference Proceedings'}
        color={'#084f41'}
      />
      <div className='page-content schedule-container '>
        <div className='agenda-content'>
          {agendaData.map((agendaItem, index) => {
            return (
              <div key={index} className="agenda-day-content">
                <div className='date-container'>{agendaItem.day}</div>
                {agendaItem.timeContent.map((agendaSchedule, id) => {
                  return (
                    <div className='agenda-schedule-container' key={id}>
                      <div className='agenda-watch'>
                        <div className='agenda-time'>{agendaSchedule.time}</div>
                        { agendaSchedule.watchLink === ""    ?
                          "": <a className="agenda-time agenda-proceedings" href={agendaSchedule.watchLink}  rel="noreferrer" target='_blank' >
                          <BiPlayCircle className="pro-Icon" />
                          <span className="pro-text">Watch</span>
                        </a>
                        }
                        
                        </div>
                          <div className='agenda-schedule-content'>
                            <h3>{agendaSchedule.title}</h3>
                            <h4> {agendaSchedule.sessionTitle && 'Title:'} {agendaSchedule.sessionTitle}</h4>
                            <h4 className='session-speaker'>{agendaSchedule.Speaker && 'Speaker(s):'} <span style={{ fontWeight: 'bold' }}>{agendaSchedule.Speaker}</span></h4>
                            <p className='session-content'>{agendaSchedule.sessionContent}</p>
                          </div>
                        </div>
                        )
                      })}

                      </div>
                      )
                })}

                    </div>

             
      </div>
    </div>
        )
}
        export default Schedule;

