"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,  faTimes, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';





export default function Navbar() {
  return (
    <nav class="container navbar bg-body-light navbar-expand-lg ">
  <div class="container-fluid">
    <Link class="navbar-brand" href="/"><Image src='/bazalogo.png' alt='logo of the website' width={150} height={120}/></Link>
    <Link href='/login' className=' d-none d-sm-inline d-md-none'><button className='btn btn-warning px-4 text-dark'>Login</button></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Baza Academy</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body text-align-center">
        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3 ">
          <li class="nav-item">
            <Link class="nav-link active mt-2" aria-current="page" href="/">Home</Link>
          </li>
         
          <li class="nav-item dropdown  mt-2">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Search
            </a>
            <ul class="dropdown-menu">
               <li><Link className="dropdown-item" href="/search-tutors">Search Tutors</Link></li>
              <li><Link class="dropdown-item" href="#">Search Listed Tutoring Jobs</Link></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><Link class="dropdown-item" href="#">Search By Location</Link></li>
            </ul>
          </li>
          {/* Navbar Item For More Info*/}
          <li class="nav-item dropdown  mt-2">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Information
            </a>
            <ul class="dropdown-menu ">
               <li><Link className="dropdown-item" href="/search-tutors">About Us</Link></li>
              <li><Link class="dropdown-item" href="#">Privacy Policy</Link></li>
              <li><Link class="dropdown-item" href="#">Terms of Service</Link></li>

              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><Link class="dropdown-item" href="/pricing">Pricing</Link></li>
            </ul>
          </li>
           <li class="nav-item  mt-2">
            <Link class="nav-link" href="/contact">Contact</Link>
          </li>
           <li class="nav-item  ">
            <Link class="nav-link " href="/sign-up"><button className='btn  btn-outline-warning '>Sign Up</button></Link>
          </li>
           <li class="nav-item justify-content-center  ">
            <Link class="nav-link " href="/login"><button className='btn  btn-warning '>Sign Up</button></Link>
          </li>
        </ul>
       <li><Link class="mt-2" href="/help"> <FontAwesomeIcon icon={faQuestionCircle} className="fa-2xl	text-warning" /></Link></li>
        
      </div>
    </div>
  </div>
</nav>
  );
}
