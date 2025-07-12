import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import TutorsSection from "@/components/TutorsSection";
import "bootstrap-icons/font/bootstrap-icons.css";
import TutorialCategoriesSlider from "@/components/TutorialCategoriesSlider"



export default function Home() {
  return (
    <>
      <Head>
        <title>Baza Academy</title>
        <meta
          name="description"
          content="Book quality tutorials in tech, academics, and more."
        />
        <link rel="stylesheet" href="/css/home.css" />
      </Head>
      <main className="container p-6 position-relative">
        <h1 className="text-3xl fw-bold text-dark mb-4">
          Find Tutors & Private Lessons Online{" "}
        </h1>
        <p className="mb-4">
          Baza Academy is where Learning Meets Opportunity! Whether you're a
          parent searching for top-rated tutors or a passionate educator ready
          to share your knowledge, you've come to the right place.
        </p>

        {/* card for fins tutors and become tutors */}

        <div className="section d-lg-flex justify-content-around ">
          <div className="firstCol bg-light">
            <div className="bg-warning p-2">
              <h2 className="text-light">Find Pro Tutors </h2>
            </div>

            <div className="row">
              <Image
                className="col-lg-6"
                src="/findtutorimg.jpg"
                height={250}
                width={250}
                alt="child taking a class"
              />

              <div className="col-lg-6 p-2 ">
                <p>Find Pro Tutors</p>
                <p>Hundreds of Pro Tutors</p>
                <p>Free Registration</p>
                <p>Free Advert</p>
                <button className="btn btn-warning">Start Now</button>
              </div>
            </div>
          </div>
          <div className="secondCol bg-light">
            <div className="bg-warning p-2">
              <h2 className="text-light">Become A Tutor</h2>
            </div>
            <div className="row m-2">
              <Image
                className="col-lg-6"
                src="/becometuturimage.jpg"
                height={250}
                width={250}
                alt="someone on a laptop teaching"
              />
              <div className="col-lg-6 p-2">
                <p>Get Matched With Membership Students</p>
                <p>Lots of Tutorial Jobs to Choose</p>
                <p>Free Registration</p>
                <p>Free Tutor Advert</p>
                <button className="btn btn-warning">Start Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
      </main>

      {/* How It Works Section */}
      <div className="text-white px-4 py-5 bg bg-secondary mt-6" id="featured-3 mt-4">
  <h2 className="container pb-2 border-bottom">How It Works:</h2>
  <div className="px-5 row g-4 py-5 row-cols-1 row-cols-lg-3">
    <div className="feature col">
      <div className="feature-icon ">
        <i class="bi bi-megaphone-fill fs-1 text-warning" ></i>
      </div>
      <h2>1. State Your Requirement</h2>
      <p>Tell us about your learning needs and qualified local or online tutors will contact you as the case may be.</p>
     
    </div>
    <div className="feature col">
      <div className="feature-icon">
        <i class="bi bi-person-lines-fill fs-1 text-warning"></i>
      </div>
      <h2>2. Review Tutor's Profile</h2>
      <p>Check out the tutors qualifications, read profile, and know when they are available.</p>
   
    </div>
    <div className="feature col">
      <div className="feature-icon fs-1" >
        <i class="bi bi-person-video3 text-warning" ></i>
      </div>
      <h2>3. Agree With Tutor</h2>
      <p>Agree Times, Fees, Pay membership and start learning!.</p>
      
    </div>
    {/* Repeat for other columns */}
  </div>
</div>

        {/* Category Section */}s

         <TutorialCategoriesSlider />

        {/* Tutors Section */}

        <TutorsSection />



    </>
  );
}
