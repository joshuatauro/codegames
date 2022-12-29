import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Cards from '../Components/Cards'
import '../CSS/Landing.css'
import pic from './wallpaperflare.com_wallpaper.jpg'
const Landing = () => {

  const emailRef = useRef()
  const nameRef = useRef()
  const bodyRef = useRef()

  const gamesObject = [
    {
      name: "Reverse Coding",
      desc: "Reverse Coding is one of the contests organised by DeCoders for the last several years. The participants are expected to come up with a solution to a problem where no problem statement is given, they have to analyse the outputs against various inputs from an executable file. The contest is majorly done with the idea of checking the logic-building skills of the participants",
      img: "https://c4.wallpaperflare.com/wallpaper/333/402/399/4k-avatar-2-poster-wallpaper-preview.jpg"
    },
    {
      name: "Bug Bounty",
      desc: "Bug Bounty is another one of the tech events in Code Games, where programmers are given buggy source code in different languages like C and C++ and are asked to fix the syntax as well as logical errors, compile it and run it successfully. This enables the participants to check not only their problem solving skills but also their basic knowledge of these coding languages.",
      img: "https://images3.alphacoders.com/758/thumbbig-75839.webp"
    },
    {
      name: "Meme War",
      desc: "Bring out your creativity and send us your mind-blowing original memes. Let's see if you're a pro in a making us laugh and bagging attractive cash prizes.",
      img: "https://images4.alphacoders.com/761/thumbbig-76146.webp"
    },
    {
      name: "Code Conqueror",
      desc: "Code Conqueror is an intense but thrilling contest where the participants are tested for their knowledge of core CSE subjects, recent technological trends and mainly their Data Structure and Algorithms skills through competitive coding. In a team of two, participants compete to solve high level complex coding problems and win exciting cash prizes and goodies.",
      img: "https://images4.alphacoders.com/758/thumbbig-75838.webp"
    },
    {
      name: "Blind Coding",
      desc: "Blind Coding is another one of the Code games competitions which is for the participants to have fun with coding. The programmer works on code without running it until completion. The catch in this game is that the monitors are off and they are asked to code without seeing what they are writing. Participants have fun with the silly mistakes making this one of the most popular contest of the series",
      img: "https://images.alphacoders.com/521/thumbbig-521145.webp"
    },
    {
      name: "Insta-ntaneous",
      desc: "The most exciting Instagram crossword puzzle is here for you!! Check your technical vocabulary and instantaneously solve the crosswords to win exciting cash prizes!! Let's how quick and smart you are!!!",
      img: "https://images3.alphacoders.com/177/thumbbig-177515.webp"
    },
    {
      name: "Valorant Tournament",
      desc: "Having realised how much gaming helps students in teamwork, critical thinking and quick response, Valorant gaming competition is oragnised for the interested students to meet with fellow gamers in the college and have fun in a competitive sphere. Exciting cash prizes are awarded to the winning teams",
      img: "https://images.alphacoders.com/441/thumbbig-441809.webp"
    },
    {
      name: "DeCrypto",
      desc: "Decrypto is a technical contest where programmers are tested for their analytical and logical skills, through breaking a series of encrypted code segments and finally placing all together to get the final outcome....To provide an authentic programming experience, googling is allowed. (more surprises awaits you....)",
      img: "https://images8.alphacoders.com/521/thumbbig-521142.webp"
    },

  ]

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
        <a href="https://www.yepdesk.com/embed/buy-tickets/63ac20bdc9e77c0001190664/private/um2b6vus9t" className="cg__landing__register_btn"  target="_blank" rel="noreferrer" >
            Register
          </a>
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
        {
          gamesObject.map((it, index) => <Cards game={it.name} isRev={index%2 === 0} img={it.img} desc={it.desc}  />)
        }

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
            <div className="cg__landing__contact__form_grid">
              <div className="grouped">
                <input ref={emailRef} type="text" required  />
                <label htmlFor="">EMAIL</label>
              </div>
              <div className="grouped">
                <input ref={nameRef} type="text" required  />
                <label  htmlFor="">NAME</label>
              </div>
            </div>
            <div className="grouped text">
              <textarea ref={bodyRef} type="text" required  />
              <label htmlFor="">BODY</label>
            </div>
            <div className="cg__landing__contact__form__btn">
              <button type="submit" className="">Submit!</button>
            </div>
          </form>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Landing