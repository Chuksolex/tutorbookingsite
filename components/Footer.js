"use client";
import Link from 'next/link';
import React, { } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,  faTimes, faQuestionCircle, } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faPinterest, faWhatsapp , faXTwitter} from '@fortawesome/free-brands-svg-icons'; // IMPORTANT: For social media icons!

import Image from 'next/image';

export default function Footer() {
  return (
    
    <div class="container"> 
       <footer class="py-5"> 
       <div class="row ">
        <div class="col-6 col-md-2 mb-3"> 
           <h5>Section</h5> 
           <ul class="nav flex-column"> 
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li> 
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li> 
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li> 
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li> 
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li> 
           </ul> 
          </div>
          <div class="col-6 col-md-2 mb-3"> 
            <h5>Section</h5> 
            <ul class="nav flex-column">
               <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li> 
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li> 
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li> 

            </ul> 
          </div> 
          <div class="col-6 col-md-2 mb-3"> 
            <h5>Section</h5> 
            <ul class="nav flex-column">
               <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li> 
               <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li> 
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                 <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li> 
            </ul> 
            </div> 
            <div class="col-md-5 offset-md-1 mb-3"> 
              <form> 
                <h5>Subscribe to our newsletter</h5> 
                <p>Monthly digest of what's new and exciting from us.</p> 
                <div class="d-flex flex-column flex-sm-row w-100 gap-2"> 
                  <label for="newsletter1" class="visually-hidden">Email address</label>
                   <input id="newsletter1" type="email" class="form-control" placeholder="Email address" />
                    <button class="btn btn-warning" type="button">Subscribe</button> 
                </div> 
                </form> 
                </div> </div> 
                 <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center py-4 my-4 border-top"> 
      
      {/* Copyright text - text-center on xs, text-start on sm and up */}
      <p className="text-center text-sm-start mb-2 mb-sm-0">
        {new Date().getFullYear()} Baza Academy, Inc. All rights reserved.
      </p> 

      {/* Social Media Icons - d-flex for horizontal, mb-2 on xs before the image */}
      <ul className="list-unstyled d-flex mb-2 mb-sm-0"> 
        <li className="ms-3">
          <a className="link-body-emphasis" href="#" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} size="2xl" className="highlight" color='red'/>
          </a>
        </li> 
        <li className="ms-3">
          <a className="link-body-emphasis" href="#" aria-label="X (Twitter)">
            <FontAwesomeIcon icon={faXTwitter} size="2xl" />
          </a>
        </li> 
        <li className="ms-3">
          <a className="link-body-emphasis" href="#" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2xl" className='text-primary' />
          </a>
        </li>
        <li className="ms-3">
          <a className="link-body-emphasis" href="#" aria-label="WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp} size="2xl" className='text-success'/>
          </a>
        </li> 
        <li className="ms-3">
          <a className="link-body-emphasis" href="#" aria-label="Pinterest">
            <FontAwesomeIcon icon={faPinterest} size="2xl" className='text-danger'/>
          </a>
        </li> 
        <li className="ms-3">
          <a className="link-body-emphasis" href="#" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} className="text-primary" size="2xl"/>
          </a>
        </li>
      </ul> 
      
      {/* Payment Image - No bottom margin on sm and up as it's in a row */}
      <Image src='/securepayment.jpeg' width={150} height={60} alt='Secure Payment' />
    </div>
                   </footer> 
           </div>
  );
}
