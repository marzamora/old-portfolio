import React, { useState } from 'react';
import './Hero.scss';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

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
            setTipMsg(`${window.isSecureContext}`);
            console.log("Err") ;
        }
    }

    const renderTooltip = (
        <Tooltip>
            {tipMsg}
        </Tooltip>
    );
    
    const renderTooltipErr = (
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
            overlay={copied ? renderTooltip : renderTooltipErr}
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

    return(
      <div className="hero">
          <div className="hero-container">
              <div>
                <h5 className="hero-subtitle">Hi, I'm Marcello Zamora.</h5>
                <h1 className="hero-title">
                    Welcome to my portfolio.
                </h1>
                  <Button className="hero-btn" variant="outline-dark" href="#showcase">See my Work</Button> 
                  <ContactMeButton>Get in Touch</ContactMeButton>
              </div>
          </div>
      </div>
    );
}


export default Hero;