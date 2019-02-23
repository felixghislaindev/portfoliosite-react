import React from 'react';
// importing avatar image
import aboutImg from '../images/avataaars(1).png'
 

const intro = () => {
    return (
        <React.Fragment>
        <div className="intro-img">
        <img src={aboutImg} alt="avatar" />
        </div>
        
        <div className='introsec'>
      

        <h1>Felix an aspiring front-end engineer.</h1>
        <p>I have a passion for building websites and web app for web and mobile devices.</p>
    </div>
        </React.Fragment>
       
    );
};

export default intro;