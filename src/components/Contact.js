import React from 'react';
import {AiOutlineGithub,AiOutlineMail} from 'react-icons/ai'
import {BsYoutube} from 'react-icons/bs'
import {SiUpwork,SiFiverr} from 'react-icons/si'
import {IoLogoWhatsapp} from 'react-icons/io'

import Image from "react-bootstrap/Image";
export default function Contact() {
  
  return (
   <>
   <div className="container border my-3 rounded  ">
    <div className="row align-items-center ">
      <div className="col-4">
        <div className="text-center my-5">
            <Image className='rounded-circle'   width={200} src="https://i.ibb.co/jWBXm3r/contact.png"></Image>
        </div>
      </div>
      <div className="col-4">
      <h1>Contact</h1>
          <p>Get in touch with me for any help!</p>
          <p>I'd be happy to connect with you to discuss web development, Free Code Camp, or anything else.</p>
    </div>
    </div>
   </div>
    
   <div id="contact" className="content-section my-5">
  <div className="container">
    <div className="row">
    </div>
    <hr></hr>
    <div className="row justify-content-center">
     
          <div className="col-3 contact-button">
            <a className="btn btn-default btn-lg btn-block" href="https://github.com/piyushpatil614" target="_blank"><i className="fa fa-github fa-2x"></i>Github <AiOutlineGithub size={35}/></a>
          </div>
          <div className="col-3 contact-button">
            <a className="btn btn-default btn-lg btn-block" href="https://www.youtube.com/@adamantine5341" target="_blank"><i className="fa fa-fire fa-2x" ></i> Youtube <BsYoutube size={35}/></a>
          </div>
          <div className="col-3 contact-button">
            <a className="btn btn-default btn-lg btn-block" href="https://www.upwork.com/freelancers/~011664516943a49688?viewMode=1" target="_blank"><i className="fa fa-linkedin fa-2x"></i> Upwork <SiUpwork size={35}/></a>
          </div>
          <div className="col-3 contact-button">
            <a className="btn btn-default btn-lg btn-block" href="https://www.fiverr.com/pp6140?public_mode=true" target="_blank"><i className="fa fa-twitter fa-2x"></i> Fiver <SiFiverr size={35}/> </a>
          </div>
          <div className="col-4 contact-button">
            <a className="btn btn-default btn-lg btn-block" href="#" target="_blank"><i className="fa fa-linkedin fa-2x"></i> +91-9158071351  <IoLogoWhatsapp size={35}/></a>
          </div>
          <div className="col-6 contact-button">
            <a className="btn btn-default btn-lg btn-block" href="#" target="_blank"><i className="fa fa-twitter fa-2x"></i> piyushpatil6140@gmail.com <AiOutlineMail size={35}/> </a>
          </div>
       
    </div>
  </div>
</div>

   </>
  )
}
