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
          <p className="cg__km__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda expedita blanditiis culpa facilis soluta eos porro, maxime placeat quo officiis fugiat officia ab quos vel impedit asperiores esse a possimus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, saepe iste incidunt molestiae sunt quaerat qui dicta veniam id ad tempora eveniet quidem aspernatur voluptatum assumenda iure maxime ab blanditiis.</p>
          <div className="cg__km__detail">
            <p>TEAM TYPE:</p>
            <p>INDIVIDUAL </p>
          </div>
          <div className="cg__km__detail">
            <p>REGISTRATION FEE'S:</p>
            <p>Rs 50 </p>
          </div>
          <div className="cg__km__detail">
            <p>INCHARGE:</p>
            <p>Joshua Tauro, 9686310532 </p>
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

export default BugBounty