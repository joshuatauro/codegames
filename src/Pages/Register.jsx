import React, { useRef } from 'react'
import '../CSS/Register.css' 
const Register = () => {
  const onSubmitHandler = () => {

  }

  const emailRef = useRef();
  const nameRef = useRef();
  const bodyRef = useRef();



  return (
    <div className="cg__register">
      <div className="cg__register__container">
        <h1 className="cg__register__title">Register</h1>
        <p className="cg__register__para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis soluta, obcaecati rerum repellat dolorum voluptates dolorem unde tenetur, nostrum maiores, debitis veniam amet? Dignissimos laudantium quasi velit assumenda illo?</p>
        <form onSubmit={onSubmitHandler} className="cg__landing__contact__form_group">
          <div className="cg__register__grid">

            <div className="grouped">
              <input ref={emailRef} type="text" required  />
              <label htmlFor="">NAME</label>
            </div>
            <div className="grouped">
              <input ref={nameRef} type="text" required  />
              <label  htmlFor="">EMAIL</label>
            </div>
            <div className="grouped">
              <input ref={emailRef} type="text" required  />
              <label htmlFor="">USN</label>
            </div>
          </div>
          <div className="cg__register__grid">
            <div className="grouped">
              <input ref={nameRef} type="text" required  />
              <label  htmlFor="">TRANSACTION ID</label>
            </div>
          <div className="grouped col2">
              <select>
                <option value="0">SELECT EVENT:</option>
                <option value="1">Reverse Coding</option>
                <option value="2">Blind Coding</option>
                <option value="3">Bug Bounty</option>
                <option value="4">DevCon</option>
                <option value="5">Insta Fun</option>
                <option value="6">Valorant Gaming Tournament</option>
                <option value="7">DeCrypto</option>
              </select>
              <div className="grouped__icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
              </div>

            </div>
            
          </div>
            
            <div className="cg__landing__contact__form__btn">
              <button type="submit" className="">Submit!</button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Register