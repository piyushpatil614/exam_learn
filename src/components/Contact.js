import React from 'react';
import {AiOutlineGithub} from 'react-icons/ai'
import {BsYoutube} from 'react-icons/bs'
import {SiUpwork,SiFiverr} from 'react-icons/si'
import Image from "react-bootstrap/Image";
export default function Contact() {
  return (
   <>
    <div className="text-center my-5">
    <Image src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" roundedCircle/>
    </div>
   
   <div className="ratio ratio-16x9">
   <iframe width="784" height="441" src="https://www.youtube.com/embed/GE6IRTLkvFg" title="ChatApp using Blockchain in 3 minutes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      {/* <iframe
        src="https://www.youtube.com/embed/watch?v=WvTGSYedSPE"
        title="YouTube video"
        allowfullscreen
      ></iframe> */}
    </div>
<div id="contact" class="content-section">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Contact</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <p>Get in touch with me on social media!</p>
        <p>I'd be happy to connect with you to discuss web development, Free Code Camp, or anything else.</p>
      </div>
      <div class="col-md-8">
        <div class="row">
          <div class="col-sm-6 contact-button">
            <a class="btn btn-default btn-lg btn-block" href="https://github.com/piyushpatil614" target="_blank"><i class="fa fa-github fa-2x"></i>Github <AiOutlineGithub size={35}/></a>
          </div>
          <div class="col-sm-6 contact-button">
            <a class="btn btn-default btn-lg btn-block" href="https://www.youtube.com/@adamantine5341"><i class="fa fa-fire fa-2x" target="_blank"></i> Youtube <BsYoutube size={35}/></a>
          </div>
          <div class="col-sm-6 contact-button">
            <a class="btn btn-default btn-lg btn-block" href="https://www.linkedin.com/in/coreyalanwhite"><i class="fa fa-linkedin fa-2x"></i> Upwork <SiUpwork size={35}/></a>
          </div>
          <div class="col-sm-6 contact-button">
            <a class="btn btn-default btn-lg btn-block" href="https://twitter.com/corey_a_white/"><i class="fa fa-twitter fa-2x"></i> Fiver <SiFiverr size={35}/> </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
   </>
  )
}
