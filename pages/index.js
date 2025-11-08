import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import TutorsSection from "@/components/TutorsSection";
import "bootstrap-icons/font/bootstrap-icons.css";
import TutorialCategoriesSlider from "@/components/TutorialCategoriesSlider";
import FeaturedTutors from "@/components/Featuredtutors";
import ReviewsSection from "@/components/ReviewsSection";

export default function Home() {
  const [userCountry, setUserCountry] = useState("US");

  useEffect(() => {
    const savedCountry = localStorage.getItem("selectedCountry");

    if (savedCountry) {
      setUserCountry(savedCountry);
    } else {
      // Try to detect automatically
      fetch("https://ipapi.co/json/")
        .then((res) => res.json())
        .then((data) => {
          if (data && data.country_name) {
            setUserCountry(data.country_name.toLowerCase());
            localStorage.setItem("selectedCountry", data.country_name.toLowerCase());
          } else {
            setUserCountry("nigeria"); // fallback default
          }
        })
        .catch(() => setUserCountry("nigeria")); // fallback if API fails
    }
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_COMPANY_NAME} | Find Tutors & Private Lessons</title>
        <meta
          name="description"
          content="Book physical or online quality tutorials in tech, academics, and more."
        />
      </Head>

      <main className="container p-6 position-relative">
        <h1 className="text-3xl fw-bold text-dark mb-4">
          Find Tutors & Private Lessons Online{" "}
        </h1>
        <p className="mb-4">
          {process.env.NEXT_PUBLIC_COMPANY_NAME} is where Learning Meets Opportunity! Whether
          you&apos;re a parent searching for top-rated tutors or a passionate
          educator ready to share your knowledge, you&apos;ve come to the right
          place.
        </p>

        {/* Find Tutors and Become Tutor sections ... */}
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <div className="mb-3 d-flex justify-content-center">
                  <Image
                    src="/tutor9.jpg"
                    alt="Find a Tutor"
                    width={600}
                    height={300}
                    className="rounded object-cover"
                  />
                </div>
                <h2 className="card-title h5">Find a Tutor</h2>
                <p className="card-text flex-grow-1">
                  Browse our extensive list of qualified tutors across various
                  subjects and skills. Whether you need help with academics,
                  music, or professional skills, we have the right tutor for
                  you.
                </p>
                <Link href="/tutorials" className="btn btn-secondary mt-auto">
                  Search Tutors
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <div className="mb-3 d-flex justify-content-center">
                  <Image
                    src="/tutor10.jpg"
                    alt="Become a Tutor"
                    width={600}
                    height={300}
                    className="rounded object-cover"
                  />
                </div>
                <h2 className="card-title h5">Become a Tutor</h2>
                <p className="card-text flex-grow-1">
                  Join our community of passionate educators and start
                  tutoring students worldwide. Share your expertise, set your
                  own rates, and make a difference in someone&apos;s learning
                  journey.
                </p>
                <Link href="/auth/signup" className="btn btn-success mt-auto">
                  Join as Tutor
                </Link>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* How It Works */}
      <div className="text-white px-4 py-5 bg bg-secondary mt-6" id="featured-3 mt-4">
        <h2 className="container pb-2 border-bottom">How It Works:</h2>
        <div className="px-5 row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon ">
              <i className="bi bi-megaphone-fill fs-1 text-warning"></i>
            </div>
            <h2>1. State Your Requirement</h2>
            <p>
              Tell us about your learning needs and qualified local or online
              tutors will contact you as the case may be.
            </p>
          </div>
          <div className="feature col">
            <div className="feature-icon">
              <i className="bi bi-person-lines-fill fs-1 text-warning"></i>
            </div>
            <h2>2. Review Tutor&apos;s Profile</h2>
            <p>
              Check out the tutors qualifications, read profile, and know when
              they are available.
            </p>
          </div>
          <div className="feature col">
            <div className="feature-icon fs-1">
              <i className="bi bi-person-video3 text-warning"></i>
            </div>
            <h2>3. Agree With Tutor</h2>
            <p>Agree Times, Fees, Pay membership and start learning!.</p>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <TutorialCategoriesSlider />

      {/* Tutors Section */}
      <TutorsSection />

      {/* Reviews */}
      <ReviewsSection />

      {/* Featured Tutorials with auto-detected country */}
      <FeaturedTutors userCountry={userCountry || "global"} />
    </>
  );
}
