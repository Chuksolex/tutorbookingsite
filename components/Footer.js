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
           <h5 className='fw-bold'>About</h5> 
            <hr className='w-50 border-warning border-2'/>

           <ul class="nav flex-column"> 
              <li class="nav-item mb-2"><a href="/about-us" class="nav-link p-0 text-body-secondary">Who are we?</a></li> 
              <li class="nav-item mb-2"><a href="/terms-and-conditions" class="nav-link p-0 text-body-secondary">Terms & Conditions</a></li> 
              <li class="nav-item mb-2"><a href="/privacy-policy" class="nav-link p-0 text-body-secondary">Privacy Policy</a></li> 
              <li class="nav-item mb-2"><a href="/baza-academy-worldwide" class="nav-link p-0 text-body-secondary">Baza Academy Worldwide</a></li> 
              <li class="nav-item mb-2"><a href="/online-tutorials" class="nav-link p-0 text-body-secondary">Online-Tutorials</a></li> 
              <li class="nav-item mb-2"><a href="/states" class="nav-link p-0 text-body-secondary">States</a></li>
              <li class="nav-item mb-2"><a href="/careers" class="nav-link p-0 text-body-secondary">Baza Academy Careers</a></li>






           </ul> 
          </div>
          <div class="col-6 col-md-2 mb-3"> 
           <h5 className='fw-bold'>Subjects </h5> 
           <hr className='w-50 border-warning border-2'/>

            <ul class="nav flex-column">
               <li class="nav-item mb-2"><a href="/type-of-tutorial/arts-and-hobbies" class="nav-link p-0 text-body-secondary">Arts & Hobbies</a></li>
                <li class="nav-item mb-2"><a href="/type-of-tutorial/career-development" class="nav-link p-0 text-body-secondary">Career-Development</a></li>
                <li class="nav-item mb-2"><a href="/type-of-tutorial/computer-sciences" class="nav-link p-0 text-body-secondary">Computer-Sciences</a></li> 
                <li class="nav-item mb-2"><a href="/type-of-tutorial/languages" class="nav-link p-0 text-body-secondary">Languages</a></li> 
                <li class="nav-item mb-2"><a href="/type-of-tutorial/languages" class="nav-link p-0 text-body-secondary">Languages</a></li> 
                <li class="nav-item mb-2"><a href="/type-of-tutorial/music" class="nav-link p-0 text-body-secondary">Music</a></li> 
                <li class="nav-item mb-2"><a href="/type-of-tutorial/languages" class="nav-link p-0 text-body-secondary">Health & Wellness</a></li> 
                <li class="nav-item mb-2"><a href="/type-of-tutorial/languages" class="nav-link p-0 text-body-secondary">Academic Lessons</a></li> 
                <li class="nav-item mb-2"><a href="/type-of-tutorial/languages" class="nav-link p-0 text-body-secondary">Sports</a></li> 





            </ul> 
          </div> 
          <div class="col-6 col-md-2 mb-3"> 
            <h5 className='fw-bold'>Share Point</h5> 
            <hr className='w-50 border-warning border-2'/>
            <ul class="nav flex-column">
               <li class="nav-item mb-2"><a href="/bog" class="nav-link p-0 text-body-secondary">Baza Academy Blog</a></li> 
               <li class="nav-item mb-2"><a href="/teaching-resources" class="nav-link p-0 text-body-secondary">Teaching Resources</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li> 
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
            </ul> 
            </div> 
            <div class="col-md-5 offset-md-1 mb-3 border border-2 border-warning"> 
              <h5 className='fw-bold'>Baza Academy</h5>
              <hr className='w-25 border-warning border-2'/>

              <p>Your trusted partner for tutorial connects.</p>
              <p>Baxa Academy is a dynamic educational platform dedicated to connecting passionate tutors with eager learners from all walks of life. We believe that personalized learning has the power to transform lives, which is why we make it easy for students to find skilled, trusted tutors who match their specific goals and interests. </p>
                <p>Whether you're looking to master a new language, improve your academic performance, or develop valuable career skills, Baxa Academy offers a seamless way to access high-quality instruction tailored to your needs.</p>
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
          <a className="link-body-emphasis" href="https://www.facebook.com/people/Baza-Academy/100066410817001/" aria-label="Facebook">
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
