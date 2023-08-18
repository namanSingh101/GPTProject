import React from 'react'
import "./footer.css"
import gptLogo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do You Step Into The Future Before Others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <button>Request Early Access</button>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gptLogo} alt="logo" />
          <p>Get Ready To Experience, <br /> All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>About</p>
          <p>Contact</p>
          <p>Oversead</p>
          <p>Social Media</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>About</p>
          <p>Contact</p>
          <p>Oversead</p>
          <p>Social Media</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>About</p>
          <p>Contact</p>
          <p>Oversead</p>
          <p>Social Media</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer