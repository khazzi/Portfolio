import React from 'react';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://x.com/khazzidev?s=21&t=ZUeGa4B3slnOieBO-6eLPA" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
    </div>
    <div>
     <a href="https://www.linkedin.com/in/akandeowoo-qudus-6b1b111a7" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a> 
    </div>
    <div>
     <a href="https://github.com/khazzi" target="_blank" rel="noopener noreferrer"><BsGithub /></a> 
    </div>
  </div>
);

export default SocialMedia;
