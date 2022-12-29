import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Knowmore.css'
const BugBounty = () => {
  return (
    <div className="cg__km">
      <div className="cg__km__container">
        <div className="cg__km__img_container">
          <img src="https://images3.alphacoders.com/177/thumbbig-177515.webp" alt="" />
        </div>
        <div className="cg__km__details">
          <h1 className="cg__km__title">Bug Bounty</h1>
          <p className="cg__km__subtitle">" Sit tight, code right.
An event for all the debuggers out there!! "</p>
          <p className="cg__km__para">Bug Bounty is another one of the tech events in Code Games, where programmers are given buggy source code in different languages like C and C++ and are asked to fix the syntax as well as logical errors, compile it and run it successfully. This enables the participants to check not only their problem solving skills but also their basic knowledge of these coding languages.</p>
          <div className="cg__km__detail">
            <p>TEAM TYPE:</p>
            <p>TEAM OF 2 </p>
          </div>
          <div className="cg__km__detail">
            <p>REGISTRATION FEE'S:</p>
            <p>Rs 30 </p>
          </div>
          <div className="cg__km__detail">
            <p>INCHARGE:</p>
            <p>Rohith C, 8431782443 </p>
          </div>
          <div className="cg__km__btnn">
          <a href="https://www.yepdesk.com/embed/buy-tickets/63ac20bdc9e77c0001190664/private/um2b6vus9t" className="cg__km__btn"  target="_blank" rel="noreferrer" >
            Register
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BugBounty