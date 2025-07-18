import { useRouter } from "next/router";
import tutors from "@/components/data/tutors";
import TutorCard from "@/components/TutorCard";

// Slugify utility
const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

const CityPage = () => {
  const router = useRouter();
  const { subject, country, state, city } = router.query;

  const filteredTutors = tutors.filter(
    (tutor) =>
      slugify(tutor.subject) === subject &&
      slugify(tutor.country) === country &&
      slugify(tutor.state) === state &&
      slugify(tutor.city) === city
  );

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-capitalize">
        {subject?.replace(/-/g, " ")} Tutors in {city?.replace(/-/g, " ")},{" "}
        {state?.replace(/-/g, " ")}, {country?.replace(/-/g, " ")}
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
            No tutors found for <strong>{subject?.replace(/-/g, " ")}</strong>{" "}
            in <strong>{city?.replace(/-/g, " ")}, {state?.replace(/-/g, " ")}, {country?.replace(/-/g, " ")}</strong>.
          </p>
        )}
      </div>
    </div>
  );
};

export default CityPage;
