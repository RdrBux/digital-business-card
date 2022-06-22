import React from 'react';
import twitterIcon from '../img/twitter.svg';
import facebookIcon from '../img/facebook.svg';
import instagramIcon from '../img/instagram.svg';
import githubIcon from '../img/github.svg';

export default function Footer() {
  return (
    <footer>
      <a href="https://www.twitter.com/">
        <img src={twitterIcon} alt="twitter" />
      </a>
      <a href="https://www.facebook.com/">
        <img src={facebookIcon} alt="facebook" />
      </a>
      <a href="https://www.instagram.com/">
        <img src={instagramIcon} alt="instagram" />
      </a>
      <a href="https://www.github.com/">
        <img src={githubIcon} alt="github" />
      </a>
    </footer>
  );
}
