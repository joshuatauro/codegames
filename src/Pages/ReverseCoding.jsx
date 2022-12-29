import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Knowmore.css'
const ReverseCoding = () => {
  return (
    <div className="cg__km">
      <div className="cg__km__container">
        <div className="cg__km__img_container">
          <img src="https://images3.alphacoders.com/177/thumbbig-177515.webp" alt="" />
        </div>
        <div className="cg__km__details">
          <h1 className="cg__km__title">Reverse Coding</h1>
          <p className="cg__km__subtitle">"It's not an easy course, when you have to find your way back to the source"</p>
          <p className="cg__km__para">Reverse Coding is one of the contests organised by DeCoders for the last several years. The participants are expected to come up with a solution to a problem where no problem statement is given, they have to analyse the outputs against various inputs from an executable file. The contest is majorly done with the idea of checking the logic-building skills of the participants</p>
          <div className="cg__km__detail">
            <p>TEAM TYPE:</p>
            <p>INDIVIDUAL </p>
          </div>
          <div className="cg__km__detail">
            <p>REGISTRATION FEE'S:</p>
            <p>Rs 30 </p>
          </div>
          <div className="cg__km__detail">
            <p>INCHARGE:</p>
            <p>Rohith C, 8431782443 </p>
          </div>
          <Link to="/register">
            <button className="cg__km__btn">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ReverseCoding