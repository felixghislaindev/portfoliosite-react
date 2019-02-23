import React from 'react';
// importing font awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

 
library.add( fab,faEnvelope )


const footer = () => {
    return (
        <div>
            <footer>
            <h4>Thanks for visiting.</h4>
            <p>Im based in london. Let's connect through on the platfrom bellow.</p>
            <ul>
                <li><FontAwesomeIcon icon={['fab', 'github-alt']} /></li>
                <li><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></li>
                <li><FontAwesomeIcon icon={['fab', 'github']} /></li>
                <li><FontAwesomeIcon icon={faEnvelope} /></li>
            </ul>
            </footer>
        </div>
    );
}

export default footer;
