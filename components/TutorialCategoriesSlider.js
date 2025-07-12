import Link from "next/link";
import Image from "next/image";
import React from "react";

const categories = [
  { subject: "english", country: "nigeria", image: "/tutor5.jpg" },
  { subject: "maths", country: "united-states", image: "/tutor3.jpg" },
  { subject: "physics", country: "canada", image: "/tutor8.jpg" },
  { subject: "chemistry", country: "ghana", image: "/tutor1.jpg" },
  { subject: "biology", country: "kenya", image: "/tutor6.jpg" },
  { subject: "computer-science", country: "india", image: "/tutor7.jpg" },
  { subject: "french", country: "france", image: "/tutor6.jpg" },
  { subject: "chinese", country: "china", image: "/tutor8.jpg" },
  { subject: "music", country: "nigeria", image: "/tutor3.jpg" },
  { subject: "economics", country: "uk", image: "/tutor4.jpg" },
  { subject: "geography", country: "south-africa", image: "/tutor2.jpg" },
  { subject: "history", country: "egypt", image: "/tutor1.jpg" },
  { subject: "literature", country: "australia", image: "/tutor5.jpg" },
  { subject: "accounting", country: "nigeria", image: "/tutor3.jpg" },
  { subject: "law", country: "usa", image: "/tutor8.jpg" },
  { subject: "medicine", country: "uk", image: "/tutor2.jpg" },
  { subject: "dance", country: "ghana", image: "/tutor1.jpg" },
  { subject: "sports", country: "nigeria", image: "/tutor5.jpg" },
  { subject: "agriculture", country: "kenya", image: "/tutor6.jpg" },
  { subject: "philosophy", country: "italy", image: "/tutor8.jpg" },
    
  // ✅ IELTS added
  { subject: "ielts", country: "nigeria", image: "/tutor8.jpg" },
];

const TutorialCategoriesSlider = () => {
  return (
    <div className="container my-4">
      <h3 className="mb-3 text-center fs-2">Explore Tutorials:</h3>
      <div
        className="d-flex overflow-auto pb-3"
        style={{ gap: "1rem", whiteSpace: "nowrap" }}
      >
        {categories.map((cat, index) => (
          <Link
            href={`/tutorials/${cat.subject}/${cat.country}`}
            key={index}
            className="text-decoration-none"
          >
            <div
              className="card shadow-sm"
              style={{ minWidth: "150px", maxWidth: "150px", cursor: "pointer" }}
            >
              <Image
                src={cat.image}
                alt={cat.subject}
                width={150}
                height={100}
                style={{ objectFit: "cover" }}
              />
              <div className="card-body p-2 text-center">
                <h6 className="mb-0" style={{ fontSize: "0.9rem" }}>
                  {cat.subject.replace("-", " ").toUpperCase()}
                </h6>
                <small className="text-muted">{cat.country}</small>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TutorialCategoriesSlider;
