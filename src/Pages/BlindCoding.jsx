import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Knowmore.css'
const BlindCoding = () => {
  return (
    <div className="cg__km">
      <div className="cg__km__container">
        <div className="cg__km__img_container">
          <img src="https://images3.alphacoders.com/177/thumbbig-177515.webp" alt="" />
        </div>
        <div className="cg__km__details">
          <h1 className="cg__km__title">Blind Coding</h1>
          <p className="cg__km__subtitle">"Code simple but with your monitors shut"</p>
          <p className="cg__km__para">Blind Coding is another one of the Code games competitions which is for the participants to have fun with coding. The programmer works on code without running it until completion. The catch in this game is that th e monitors are off and they are asked to code without seeing what they are writing. Participants have fun with the silly mistakes making this one of the most popular contest of the series</p>
          
          <div className="cg__km__detail">
            <p>TEAM TYPE:</p>
            <p>INDIVIDUAL </p>
          </div>
          <div className="cg__km__detail">
            <p>REGISTRATION FEE'S:</p>
            <p>Rs 20 </p>
          </div>
          <div className="cg__km__detail">
            <p>INCHARGE:</p>
            <p>Rohith C, 9686310532 </p>
          </div>
          <a href="https://www.yepdesk.com/embed/buy-tickets/63ac20bdc9e77c0001190664/private/um2b6vus9t" className="cg__km__btn"  target="_blank" rel="noreferrer" >
            Register
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlindCoding