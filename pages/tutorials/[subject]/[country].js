import { useRouter } from "next/router";
import React from "react";
import TutorCard from "@/components/TutorCard"; // Update this path if needed

const mockTutors = [
  {
    id: 1,
    firstName: "Li",
    city: "New York",
    offersPhysical: true,
    offersOnline: true,
    subject: "Chinese",
    shortDesc: "Native Chinese speaker with 10 years teaching experience.",
    rating: 4.9,
    reviewsCount: 23,
    pricePerHour: 25,
    image: "/images/tutor1.jpg",
    membershipPlan: "vip",
  },
  {
    id: 2,
    firstName: "Mei",
    city: "Los Angeles",
    offersPhysical: false,
    offersOnline: true,
    subject: "Chinese",
    shortDesc: "Conversational practice and cultural immersion.",
    rating: 4.7,
    reviewsCount: 18,
    pricePerHour: 20,
    image: "/images/tutor2.jpg",
    membershipPlan: "premium",
  },
];

const CountryPage = () => {
  const router = useRouter();
  const { subject, country } = router.query;

  return (
    <div className="container my-4">
      <h2>
        Learn <strong>{subject}</strong> in <strong>{country}</strong>
      </h2>
      <div className="row">
        {mockTutors.map((tutor) => (
          <div key={tutor.id} className="col-md-4 mb-4">
            <TutorCard {...tutor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryPage;
