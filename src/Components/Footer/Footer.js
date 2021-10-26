import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'

import React from 'react';
import('./Footer.css');



const Footer = () => {
    const element = <FontAwesomeIcon icon={faFacebook} />
    const elements = <FontAwesomeIcon icon={faYoutube} />
    const element2 = <FontAwesomeIcon icon={faGithub} />

    return (
        <div className='footer' >
            <div >
                <h6>Study With CodeEdu</h6>
                <p>Career Service</p>
                <p>Testimonials</p>
                <p>FAQ</p>
            </div>
            <div >
                <h6>About US</h6>
                <p>Contact US</p>
                <p>Privacy Policy</p>
                <p>Hire Tech Talent</p>
            </div>
            <div >
                <h6>Follow Us</h6>

                <p>{element}</p>
                <p>{element2} </p>
                <p>{elements}</p>
            </div>

        </div >

    );
};

export default Footer;