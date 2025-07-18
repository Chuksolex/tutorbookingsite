import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const CountryPage = () => {
  const router = useRouter();
  const { country } = router.query;

  // ✅ You can define mock featured subjects or content per country
  const featuredSubjects = {
    nigeria: ["Maths", "English", "Physics", "IELTS"],
    "united-states": ["Coding", "SAT Prep", "Music", "Dance"],
    uk: ["Maths", "Law", "Accounting"],
    canada: ["French", "Coding", "Design"],
    france: ["Philosophy", "French Literature", "Cooking"],
    india: ["Physics", "Chemistry", "Engineering"],
    germany: ["German Language", "Engineering", "Music"],
    australia: ["Sports", "English", "Science"],
    kenya: ["Agriculture", "Biology", "Maths"],
    ghana: ["Dance", "Economics", "ICT"],
    "south-africa": ["Art", "Business Studies", "Coding"],
    china: ["Chinese Language", "Maths", "Calligraphy"],
  };

  // Get subjects for current country
  const subjects = featuredSubjects[country] || [];

  return (
    <>
      <Head>
        <title>Learn with Tutors in {country ? country.replace("-", " ") : ""} | Baza Academy</title>
        <meta
          name="description"
          content={`Explore top subjects and connect with tutors in ${country ? country.replace("-", " ") : ""}.`}
        />
      </Head>

      <div className="container my-5">
        <h1 className="mb-4 text-center" style={{ color: "#EAB308" }}>
          Tutors in {country ? country.replace("-", " ") : ""}
        </h1>

        <p className="text-center mb-4" style={{ color: "#6B7280" }}>
          Browse popular subjects and find the best tutors near you.
        </p>

        <div className="row">
          {subjects.length > 0 ? (
            subjects.map((subject, idx) => (
              <div key={idx} className="col-6 col-md-3 mb-4 text-center">
                <Link
                  href={`/tutorials/${subject.toLowerCase()}/${country}`}
                  className="text-decoration-none"
                >
                  <div
                    className="border p-3 rounded shadow-sm h-100"
                    style={{
                      borderColor: "#EAB308",
                      borderWidth: "2px",
                      transition: "transform 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <h6
                      className="mt-2"
                      style={{ color: "#000000", fontWeight: "600" }}
                    >
                      {subject}
                    </h6>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No subjects available for this country yet. Check back soon!</p>
            </div>
          )}
        </div>

        <div className="text-center mt-4">
          <Link href="/countries" className="btn btn-dark">
            Back to Countries
          </Link>
        </div>
      </div>
    </>
  );
};

export default CountryPage;
