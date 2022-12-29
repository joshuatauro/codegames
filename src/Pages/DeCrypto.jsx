import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Knowmore.css'
const DeCrypto = () => {
  return (
    <div className="cg__km">
      <div className="cg__km__container">
        <div className="cg__km__img_container">
          <img src="https://images3.alphacoders.com/177/thumbbig-177515.webp" alt="" />
        </div>
        <div className="cg__km__details">
          <h1 className="cg__km__title">DeCrypto</h1>
          <p className="cg__km__subtitle">" Enjoy coding in an arena full of coders! "</p>
          <p className="cg__km__para">Decrypto is another online contest held on the official Instagram page of DeCoders where participants are asked to solve challenging cryptic puzzles as well as their knowledge of current affairs is put to test. This helps the participants to keep up their general knowledge of computer science as well as learn more about the current technological advancements.</p>
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
          <a href="https://www.yepdesk.com/embed/buy-tickets/63ac20bdc9e77c0001190664/private/um2b6vus9t" className="cg__km__btn"  target="_blank" rel="noreferrer" >
            Register
          </a>
        </div>
      </div>
    </div>
  )
}

export default DeCrypto