import React, { useState } from 'react';
import './Hero.scss';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
    const [copied, setCopied] = useState(false);
    const [tipMsg, setTipMsg] = useState('Click to copy my E-mail address to the Clipboard');

    const Copy = () => {
        if (navigator.clipboard) {
            const my_email = "zamoramaj@gmail.com";
            navigator.clipboard.writeText(my_email);
            setTipMsg('Succesfully copied to clipboard!');
            setCopied(true);
        } else {
            setTipMsg(`Is secure context: ${window.isSecureContext}`);
        }
    }

    const renderTooltipMsg = (
        <Tooltip>
            {tipMsg}
        </Tooltip>
    );

    // Contact Me Button with Tooltip on hover.
    const ContactMeButton = props => (
        <OverlayTrigger 
            trigger="hover"
            placement="bottom"
            delay={{ show: 250, hide: 300 }}
            overlay={renderTooltipMsg}
        >
            <Button
            className="hero-btn"
            variant="outline-dark"
            onClick={Copy}
            >
            {props.children}
            </Button> 
        </OverlayTrigger>
    );

    const ChevrownDown = () => (
        <div className="down-arrow-container">
            <a href="#showcase">
                <FontAwesomeIcon icon="chevron-down" size="2x"  className="bobbing"/>
            </a>
        </div>
    );

    return(
        <div className="hero">
            <div className="hero-container">
                <div></div>
                <div>
                    <h5 className="hero-subtitle">Hi, I'm Marcello Zamora.</h5>
                    <h1 className="hero-title">
                        Welcome to my portfolio.
                    </h1>
                    <Button className="hero-btn" variant="outline-dark" href="#showcase">See my Work</Button> 
                    <ContactMeButton>Get in Touch</ContactMeButton>
                </div>
                <ChevrownDown />
            </div>
        </div>
    );
}


export default Hero;