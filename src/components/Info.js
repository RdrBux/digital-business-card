import React from 'react';
import userImg from '../img/user-img.png';
import mailImg from '../img/mail.svg';
import linkedinImg from '../img/linkedin.svg';

export default function Info() {
  return (
    <div className="info">
      <img className="info--user-img" src={userImg} alt="User" />
      <h1 className="info--name">Laura Smith</h1>
      <h3 className="info--job">Frontend Developer</h3>
      <h4 className="info--website">laurasmith.website</h4>
      <div className="info--btns">
        <button className="info--mail-btn">
          <img className="info--mail-icon" src={mailImg} alt="mail" />
          Email
        </button>
        <button className="info--linkedin-btn">
          <img
            className="info--linkedin-icon"
            src={linkedinImg}
            alt="linkedin"
          />
          Linkedin
        </button>
      </div>
    </div>
  );
}
