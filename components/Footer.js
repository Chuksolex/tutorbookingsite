"use client";
import Link from 'next/link';
import React from 'react';
import  Image  from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faPinterest, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <div className='mt-5' style={{ backgroundColor: '#e8f0fe' }}>
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5 className='fw-bold'>About</h5>
              <hr className='w-50 border-warning border-2' />

              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link href="/about-us" className="nav-link p-0 text-body-secondary">Who are we?</Link></li>
                <li className="nav-item mb-2"><Link href="/terms-and-conditions" className="nav-link p-0 text-body-secondary">Terms & Conditions</Link></li>
                <li className="nav-item mb-2"><Link href="/privacy-policy" className="nav-link p-0 text-body-secondary">Privacy Policy</Link></li>
                <li className="nav-item mb-2"><Link href="/countries" className="nav-link p-0 text-body-secondary">Prettygigs Hub Worldwide</Link></li>
                <li className="nav-item mb-2"><Link href="/tutorials" className="nav-link p-0 text-body-secondary">Online-Tutorials</Link></li>
                <li className="nav-item mb-2"><Link href="/states" className="nav-link p-0 text-body-secondary">States</Link></li>
                <li className="nav-item mb-2"><Link href="/careers" className="nav-link p-0 text-body-secondary">Prettygigs Hub Careers</Link></li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5 className='fw-bold'>Subjects </h5>
              <hr className='w-50 border-warning border-2' />

              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link href="/type-of-tutorial/arts-and-hobbies" className="nav-link p-0 text-body-secondary">Arts & Hobbies</Link></li>
                <li className="nav-item mb-2"><Link href="/type-of-tutorial/career-development" className="nav-link p-0 text-body-secondary">Career-Development</Link></li>
                <li className="nav-item mb-2"><Link href="/type-of-tutorial/computer-sciences" className="nav-link p-0 text-body-secondary">Computer-Sciences</Link></li>
                <li className="nav-item mb-2"><Link href="/type-of-tutorial/languages" className="nav-link p-0 text-body-secondary">Languages</Link></li>
                <li className="nav-item mb-2"><Link href="/type-of-tutorial/languages" className="nav-link p-0 text-body-secondary">Languages</Link></li>
                <li className="nav-item mb-2"><Link href="/type-of-tutorial/music" className="nav-link p-0 text-body-secondary">Music</Link></li>
                <li className="nav-item mb-2"><Link href="/type-of-tutorial/languages" className="nav-link p-0 text-body-secondary">Health & Wellness</Link></li>
                <li className="nav-item mb-2"><Link href="/type-of-tutorial/languages" className="nav-link p-0 text-body-secondary">Academic Lessons</Link></li>
                <li className="nav-item mb-2"><Link href="/type-of-tutorial/languages" className="nav-link p-0 text-body-secondary">Sports</Link></li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5 className='fw-bold'>Share Point</h5>
              <hr className='w-50 border-warning border-2' />
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link href="/blog" className="nav-link p-0 text-body-secondary">Prettygigs Blog</Link></li>
                <li className="nav-item mb-2"><Link href="/teaching-resources" className="nav-link p-0 text-body-secondary">Teaching Resources</Link></li>
                <li className="nav-item mb-2"><Link href="/upgrade/membership" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                <li className="nav-item mb-2"><Link href="/payment-method" className="nav-link p-0 text-body-secondary">Payment Methods</Link></li>
                <li className="nav-item mb-2"><Link href="/faqs" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                <li className="nav-item mb-2"><Link href="/ready-learners/custom-request" className="nav-link p-0 text-body-secondary">Create Request</Link></li>
              </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
              <h5 className='fw-bold'>Prettygigs Hub</h5>
              <hr className='w-25 border-warning border-1' />

              <h6>Your trusted partner for tutorial connections.</h6>

              <p>Prettygigs Hub is a dynamic platform that links passionate tutors with eager learners. We believe personalized learning transforms lives, so we make it easy to find skilled, trusted tutors who match each learner’s goals.</p>

              <p>From mastering a new language to boosting academic performance or career skills, Prettygigs Hub offers seamless access to quality, tailored instruction.</p>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center py-4 my-4 border-top">

            {/* Copyright text - text-center on xs, text-start on sm and up */}
            <p className="text-center text-sm-start mb-2 mb-sm-0">
              {new Date().getFullYear()} Prettygigs Hub Ltd. All rights reserved.
            </p>

            {/* Social Media Icons - d-flex for horizontal, mb-2 on xs before the image */}
            <ul className="list-unstyled d-flex mb-2 mb-sm-0">
              <li className="ms-3">
                <Link className="link-body-emphasis" href="#" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} size="2xl" className="highlight" color='red' />
                </Link>
              </li>
              <li className="ms-3">
                <Link className="link-body-emphasis" href="#" aria-label="X (Twitter)">
                  <FontAwesomeIcon icon={faXTwitter} size="2xl" />
                </Link>
              </li>
              <li className="ms-3">
                <Link className="link-body-emphasis" href="#" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} size="2xl" className='text-primary' />
                </Link>
              </li>
              <li className="ms-3">
                <Link className="link-body-emphasis" href="https://wa.me/+2348064762882" aria-label="WhatsApp">
                  <FontAwesomeIcon icon={faWhatsapp} size="2xl" className='text-success' />
                </Link>
              </li>
              <li className="ms-3">
                <Link className="link-body-emphasis" href="#" aria-label="Pinterest">
                  <FontAwesomeIcon icon={faPinterest} size="2xl" className='text-danger' />
                </Link>
              </li>
              <li className="ms-3">
                <Link className="link-body-emphasis" href="https://www.facebook.com/p/Prettygigs-Hub-100064187525664/" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebook} className="text-primary" size="2xl" />
                </Link>
              </li>
            </ul>

            {/* Payment Image - No bottom margin on sm and up as it's in a row */}
            <Image src='/paystack-payment.png' width={200} height={80} alt='Secure Payment: paystack inlinejs' />
          </div>
        </footer>
      </div>
    </div>
  );
}