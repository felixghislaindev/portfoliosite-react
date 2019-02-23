import React from 'react';

// importing test images for card
import cardImg from '../../images/snapper.png'

const projectCard = () => {
    return (
        <div>
            <div className="card">
            <img src={cardImg} alt="projectimage" className='projectimg' />
            <h3>Project Title</h3>
            <p>project description: </p>
            <span>Tech used: js</span>
            </div>
        </div>
    );
};

export default projectCard;