// pages/tutorials/[subject]/[country]/[state].js

import { useRouter } from "next/router";
import tutors from "@/components/data/tutors";
import TutorCard from "@/components/TutorCard";

// Helper function to convert text to URL-friendly slug
const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

const StatePage = () => {
  const router = useRouter();
  const { subject, country, state } = router.query;

  const filteredTutors = tutors.filter(
    (tutor) =>
      slugify(tutor.subject) === subject &&
      slugify(tutor.country) === country &&
      slugify(tutor.state) === state
  );

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-capitalize">
        {subject?.replace(/-/g, " ")} Tutors in {state?.replace(/-/g, " ")}, {country?.replace(/-/g, " ")}
      </h2>
      <div className="row g-4">
        {filteredTutors.length ? (
          filteredTutors.map((tutor) => (
            <div key={tutor.id} className="col-md-4">
              <TutorCard {...tutor} />
            </div>
          ))
        ) : (
          <p>
            No tutors found for{" "}
            <strong>{subject?.replace(/-/g, " ")}</strong> in{" "}
            <strong>{state?.replace(/-/g, " ")}, {country?.replace(/-/g, " ")}</strong>.
          </p>
        )}
      </div>
    </div>
  );
};

export default StatePage;
