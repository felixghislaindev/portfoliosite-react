import React from 'react';

// importing avatar image
import aboutImg from '../images/avataaars.png'

const aboutMe = () => {
    return (
        <div className='about'>
            <div className="about-info">
            <h2>About me</h2>
            <p>My name is John Doe. I am a designer and
             Front-end developer based in earth.
              My designs, solutions and ideas for your brands.</p>

              <h3>skills</h3>
              <ul>
                  <li>Html</li>
                  <li>CSS</li>
                  <li>Js</li>
                  <li>React js</li>
              </ul>
            
            </div>
            <div className="about-img">
            <img src={aboutImg} alt="avatar" />
            </div>
        </div>
    );
};

export default aboutMe;