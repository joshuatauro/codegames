import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Knowmore.css'
const ValorantTournament = () => {
  return (
    <div className="cg__km">
      <div className="cg__km__container">
        <div className="cg__km__img_container">
          <img src="https://images3.alphacoders.com/177/thumbbig-177515.webp" alt="" />
        </div>
        <div className="cg__km__details">
          <h1 className="cg__km__title">Valorant Tournament</h1>
          <p className="cg__km__subtitle">" Unleash the gamer in you! "</p>
          <p className="cg__km__para">Having realised how much gaming helps students in teamwork, critical thinking and quick response, Valorant gaming competition is oragnised for the interested students to meet with fellow gamers in the college and have fun in a competitive sphere. Exciting cash prizes are awarded to the winning teams.</p>
          <div className="cg__km__detail">
            <p>TEAM TYPE:</p>
            <p>TEAM OF 5 </p>
          </div>
          <div className="cg__km__detail">
            <p>REGISTRATION FEE'S:</p>
            <p>Rs 150 </p>
          </div>
          <div className="cg__km__detail">
            <p>INCHARGE:</p>
            <p>Rohith C, 8431782443 </p>
          </div>
          <a href="https://www.yepdesk.com/embed/buy-tickets/63ac20bdc9e77c0001190664/private/um2b6vus9t" className="cg__km__btn"  target="_blank" rel="noreferrer" >
            Register
          </a>
        </div>
      </div>
    </div>
  )
}

export default ValorantTournament