import React, { useRef } from 'react'
import Cards from '../Components/Cards'
import '../CSS/Landing.css'
import pic from './wallpaperflare.com_wallpaper.jpg'
const Landing = () => {

  const emailRef = useRef()
  const nameRef = useRef()
  const bodyRef = useRef()

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    const userDetails = {
      email: emailRef.current?.value,
      name: nameRef.current?.value,
      body: bodyRef.current?.value
    }
    console.log((userDetails))

    if(true){ // clear fields if req success and display msg
      emailRef.current.value = ""
      nameRef.current.value = ""
      bodyRef.current.value = ""
    }
  }

  return (
    <div className="cg__landing">
      <div className="cg__landing__hero">
        <h1 className="cg__landing__main">Code Games</h1>
        <p className="cg__landing__about">A one of a kind event conducted by Team DeCoders which is a fusion of Technical and non-Technical games and competitions. Technical events include Reverse Coding, DevCon, Bug Bounty and Code Conqueror</p>
        <button className="cg__landing__register_btn">Register now</button>
      </div>
      <img className='cg__landing__img' src={pic} alt="" />
      <div className="cg__landing__gradient"></div>
      <section className="cg__landing__welcome">
        <div className="cg__landing__welcome__container">
          <h1 className="cg__landing__welcome__title">
            Welcome to Code Games
          </h1>
          <div className="cg__landing__welcome__col">
            <div className="">
              <p className="cg__landing__welcome__para">A one of a kind event conducted by Team DeCoders which is a fusion of Technical and non-Technical games and competitions. Technical events include Reverse Coding, DevCon, Bug Bounty and Code Conqueror. While the non-Technical events include interesting events like Blind Coding, Meme War, Decrypto and Valorant gaming tournament.</p>
              <button className="cg__landing__welcome__btn">View the games</button>
            </div>
            <img className="cg__landing__welcome__img"  src={pic} alt="" />
          </div>
        </div>
      </section>
      <section className="cg__landing__cards">
        <Cards isRev={true} game={"DevCon"} img="https://images2.alphacoders.com/758/thumbbig-75842.webp" />
        <Cards isRev={false} game={"Reverse Coding"} img="https://images3.alphacoders.com/758/thumbbig-75839.webp" />
        <Cards isRev={true} game={"Bug Bounty"}  img="https://images4.alphacoders.com/761/thumbbig-76146.webp"/>
        <Cards isRev={false} game={"Code Conqueror"} img="https://images4.alphacoders.com/758/thumbbig-75838.webp" />
        <Cards isRev={true} game={"Valorant Tournament"} img="https://images.alphacoders.com/521/thumbbig-521145.webp" />
        <Cards isRev={false} game={"Meme War"} img="https://images3.alphacoders.com/177/thumbbig-177515.webp" />
        <Cards isRev={true} game={"Blind Coding"} img="https://images.alphacoders.com/441/thumbbig-441809.webp" />
        <Cards isRev={false} game={"DeCrypto"} img="https://images8.alphacoders.com/521/thumbbig-521142.webp" />
      </section>
      <section className="cg__landing__contact">
        <div className="cg__landing__contact__container">

        <div className="cg__landing__contact__img__container">
          <img src="https://images4.alphacoders.com/761/thumbbig-76146.webp" alt="" />
          <div className=""></div>
        </div>
        <div className="cg__landing__contact__form">
          <h1 className="cg__landing__contact__form__title">
            Contact Us
          </h1>
          <p className="cg__landing__contact__form__para">Feel free to drop any questions or doubt you have regarding the events down below, and we’ll be happy to help you at the earliest!</p>
          <form onSubmit={onSubmitHandler} className="cg__landing__contact__form_group">
            <div className="grouped">
              <input ref={emailRef} type="text" required  />
              <label htmlFor="">EMAIL</label>
            </div>
            <div className="grouped">
              <input ref={nameRef} type="text" required  />
              <label  htmlFor="">NAME</label>
            </div>
            <div className="grouped text">
              <textarea ref={bodyRef} type="text" required  />
              <label htmlFor="">BODY</label>
            </div>
            <div className="cg__landing__contact__form__btn">
              <button type="submit" className="cg__landing__contact__form__btn">Submit!</button>
            </div>
          </form>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Landing