import React from 'react';
import {AiOutlineGithub,AiOutlineMail} from 'react-icons/ai'
import {BsYoutube} from 'react-icons/bs'
import {SiUpwork,SiFiverr} from 'react-icons/si'
import {IoLogoWhatsapp} from 'react-icons/io'

import Image from "react-bootstrap/Image";
export default function Contact() {
  
  return (
   <>
    <div className="text-center my-5">
    <Image className='roundedCircle rounded'   src="https://i.ibb.co/jWBXm3r/contact.png"></Image>
    </div>
   
   <div className="ratio ratio-16x9">
   <iframe width="200" height="200" src="https://www.youtube.com/embed/GE6IRTLkvFg" title="ChatApp using Blockchain in 3 minutes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      {/* <iframe
        src="https://www.youtube.com/embed/watch?v=WvTGSYedSPE"
        title="YouTube video"
        allowfullscreen
      ></iframe> */}
    </div>
<div id="contact" className="content-section my-5">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1>Contact</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <p>Get in touch with me for any help!</p>
        <p>I'd be happy to connect with you to discuss web development, Free Code Camp, or anything else.</p>
      </div>
      <div className="col-md-8">
        <div className="row">
          <div className="col-sm-6 contact-button">
            <a className="btn btn-default btn-lg btn-block" href="https://github.com/piyushpatil614" target="_blank"><i className="fa fa-github fa-2x"></i>Github <AiOutlineGithub size={35}/></a>
          </div>
          <div className="col-sm-6 contact-button">
            <a className="btn btn-default btn-lg btn-block" href="https://www.youtube.com/@adamantine5341"><i className="fa fa-fire fa-2x" target="_blank"></i> Youtube <BsYoutube size={35}/></a>
          </div>
          <div className="col-sm-6 contact-button">
            <a className="btn btn-default btn-lg btn-block" href="https://www.linkedin.com/in/coreyalanwhite"><i className="fa fa-linkedin fa-2x"></i> Upwork <SiUpwork size={35}/></a>
          </div>
          <div className="col-sm-6 contact-button">
            <a className="btn btn-default btn-lg btn-block" href="https://twitter.com/corey_a_white/"><i className="fa fa-twitter fa-2x"></i> Fiver <SiFiverr size={35}/> </a>
          </div>
          <div className="col-sm-12 contact-button">
            <a className="btn btn-default btn-lg btn-block" href="https://www.linkedin.com/in/coreyalanwhite"><i className="fa fa-linkedin fa-2x"></i> +91-9158071351  <IoLogoWhatsapp size={35}/></a>
          </div>
          <div className="col-sm-12 contact-button">
            <a className="btn btn-default btn-lg btn-block" href="https://twitter.com/corey_a_white/"><i className="fa fa-twitter fa-2x"></i> piyushpatil6140@gmail.com <AiOutlineMail size={35}/> </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
   </>
  )
}
