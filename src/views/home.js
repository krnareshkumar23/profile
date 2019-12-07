import React from 'react';
import {FaFacebookF, FaGithub, FaLinkedinIn, FaStackOverflow, FaTwitter} from "react-icons/fa";

export default function Home() {

    return (
        <React.Fragment>
            <div id="particle-canvas"></div>
            <div className="intro-content">
                <div className="intro-content-title">
                    <div>Hello world! I am <span className="name secondary-color">Naresh Kumar</span>. <br/>I'm a full-stack web developer.</div>
                    <div className="social-icons">
                        <a className="no-link" href={"https://www.linkedin.com/in/krnareshkumar23/"} target="_blank" rel="noopener noreferrer"><span className="icon"><FaLinkedinIn/></span></a>
                        <a className="no-link" href={"https://stackoverflow.com/users/8813684/naresh-kumar"} target="_blank" rel="noopener noreferrer"><span className="icon"><FaStackOverflow/></span></a>
                        <a className="no-link" href={"https://github.com/krnareshkumar23"} target="_blank" rel="noopener noreferrer"><span className="icon"><FaGithub/></span></a>
                        <a className="no-link" href={"https://www.facebook.com/krnareshkumar23"} target="_blank" rel="noopener noreferrer"><span className="icon"><FaFacebookF/></span></a>
                        <a className="no-link" href={"https://twitter.com/krnareshkumar23"} target="_blank" rel="noopener noreferrer"><span className="icon"><FaTwitter/></span></a>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}