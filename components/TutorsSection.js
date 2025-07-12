// components/TutorsSection.js
import React from "react";
  
import TutorCard from "./TutorCard";

const TutorsSection = () => {
  const tutors = [
    {
      image: "/tutor1.jpg",
      firstName: "John",
      city: "Lagos",
      doesPhysical: true,
      doesOnline: true,
      subject: "Mathematics",
      shortDesc: "Experienced math tutor helping you master complex topics.",
      reviewsCount: 15,
      rating: 4.5,
      pricePerHour: 5000,
    },
    {
      image: "/tutor2.jpg",
      firstName: "Sarah",
      city: "Abuja",
      doesPhysical: true,
      doesOnline: false,
      subject: "English",
      shortDesc: "Passionate about language learning and essay writing.",
      reviewsCount: 8,
      rating: 4.8,

      pricePerHour: 4500,
    },
    {
      image: "/tutor3.jpg",
      firstName: "Mark",
      city: "",
      doesPhysical: false,
      doesOnline: true,
      subject: "Physics",
      shortDesc: "Simplifying physics concepts for all levels.",
      reviewsCount: 20,
      rating: 5.0,

      pricePerHour: 6000,
    },
    {
      image: "/tutor4.jpg",
      firstName: "Amaka",
      city: "Enugu",
      doesPhysical: true,
      doesOnline: true,
      subject: "Chemistry",
      shortDesc: "Helping students love and excel in chemistry.",
      reviewsCount: 12,
      rating: 4.0,

      pricePerHour: 5500,
    },
    {
      image: "/tutor5.jpg",
      firstName: "Michael",
      city: "",
      doesPhysical: false,
      doesOnline: true,
      subject: "Biology",
      shortDesc: "Making biology concepts easy and fun to learn.",
      reviewsCount: 10,
      rating: 5.0,

      pricePerHour: 5000,
    },
    {
      image: "/tutor6.jpg",
      firstName: "Grace",
      city: "Port Harcourt",
      doesPhysical: true,
      doesOnline: false,
      subject: "Economics",
      shortDesc: "Simplifies economic theories for practical understanding.",
      reviewsCount: 18,
      rating: 5.0,

      pricePerHour: 6000,
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">More Than 3000 Reviewed Tutors ⭐⭐⭐⭐⭐</h2>
        <div className="row g-4">
          {tutors.map((tutor, index) => (
            <div key={index} className="col-md-4">
              <TutorCard {...tutor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorsSection;
