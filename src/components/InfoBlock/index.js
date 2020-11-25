import React from 'react'

import {
  AiFillCheckCircle,
  AiFillExclamationCircle,
  AiFillEdit,
  AiOutlineUser,
  AiFillCloseCircle
} from "react-icons/ai";

const InfoBlock = ({ info, closeMenu }) => {
  return (
    <div className='info-block-wrapper'>
      <div className='info-block'>
        <header className='info-block-header'>
          <img src={`https://www.countryflags.io/${info.flag}/shiny/48.png`} alt={info.country} />
          <h2>{info.country} </h2>
          <AiFillCloseCircle onClick={closeMenu} className='close-icon' />
        </header>
        <div className='info-body'>
          <div className="info">
            <AiOutlineUser className='info-icon' />
            <span>Active cases:</span> {info.active}
          </div>
          <div className="info">
            <AiFillEdit className='info-icon' />
            <span>Confirmed cases:</span> {info.confirmed}
          </div>
          <div className="info">
            <AiFillExclamationCircle className='info-icon' />
            <span>Deaths:</span> {info.deaths}
          </div>
          {
            info.recovered !== 0
            &&
            <div className="info">
              <AiFillCheckCircle className='info-icon' />
              <span>Recovered:</span>  {info.recovered}
            </div>
          }
        </div>
      </div>

    </div>
  )
}

export default InfoBlock
