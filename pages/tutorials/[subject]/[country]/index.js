// pages/tutorials/[subject]/[country]/index.js

import { useRouter } from "next/router";
import tutors from "@/components/data/tutors";
import TutorCard from "@/components/TutorCard";

const CountryPage = () => {
  const router = useRouter();
  const { subject, country } = router.query;

  const filteredTutors = tutors.filter(
    (tutor) =>
      tutor.subject.toLowerCase() === subject?.toLowerCase() &&
      tutor.country.toLowerCase() === country?.toLowerCase()
  );

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-capitalize">
        {subject} Tutors in {country}
      </h2>
      <div className="row g-4">
        {filteredTutors.length ? (
          filteredTutors.map((tutor) => (
            <div key={tutor.id} className="col-md-4">
              <TutorCard {...tutor} />
            </div>
          ))
        ) : (
          <p>No tutors found for {subject} in {country}.</p>
        )}
      </div>
    </div>
  );
};

export default CountryPage;
