

// components/TutorsSection.js
import React, { useEffect, useState } from "react";
import TutorCard from "./TutorCard";

const TutorsSection = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const res = await fetch("/api/tutors");
        console.log(res.data,  "fetched data");
        
        const data = await res.json();
        

        setTutors(data);
        
      } catch (error) {
        console.error("Error fetching tutors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTutors();
  }, []);

  if (loading) {
    return (
      <section className="py-5 bg-light text-center">
        <p>Loading tutors...</p>
      </section>
    );
  }

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">More Than 3000 Reviewed Tutors ⭐⭐⭐⭐⭐</h2>
        <div className="row g-4">
          {tutors.length > 0 ? (
            tutors.map((tutor) => (
              <div key={tutor._id} className="col-md-4">
                <a href={`/tutors/${tutor._id}`} className="text-decoration-none">
                  <TutorCard
                    photo={tutor.photo || tutor.user.imageUrl}
                    firstname={tutor.user.name.split(" ")[0]}
                    title={tutor.title}
                    bio={tutor.bio}
                  qualifications={tutor.qualifications}
                  subjects={tutor.subjects}
                  teachesOnline={tutor.teachesOnline}
                  teachesInPerson={tutor.teachesInPerson}
                  location={tutor.location}
                  ratePerHour={tutor.ratePerHour}
                  rating={tutor.rating}
                  reviews={tutor.reviews}
                />
                </a>
              </div>
            ))
          ) : (
            <p className="text-center">No tutors available at the moment.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TutorsSection;

