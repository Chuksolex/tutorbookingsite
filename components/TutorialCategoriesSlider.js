import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const categories = [
  { subject: "english", image: "/tutor5.jpg" },
  { subject: "maths", image: "/tutor3.jpg" },
  { subject: "physics", image: "/tutor8.jpg" },
  { subject: "chemistry", image: "/tutor1.jpg" },
  { subject: "biology", image: "/tutor6.jpg" },
  { subject: "computer-science", image: "/tutor7.jpg" },
  { subject: "french", image: "/tutor6.jpg" },
  { subject: "chinese", image: "/tutor8.jpg" },
  { subject: "music", image: "/tutor3.jpg" },
  { subject: "economics", image: "/tutor4.jpg" },
  { subject: "geography", image: "/tutor2.jpg" },
  { subject: "history", image: "/tutor1.jpg" },
  { subject: "literature", image: "/tutor5.jpg" },
  { subject: "accounting", image: "/tutor3.jpg" },
  { subject: "law", image: "/tutor8.jpg" },
  { subject: "medicine", image: "/tutor2.jpg" },
  { subject: "dance", image: "/tutor1.jpg" },
  { subject: "sports", image: "/tutor5.jpg" },
  { subject: "agriculture", image: "/tutor6.jpg" },
  { subject: "philosophy", image: "/tutor8.jpg" },
  { subject: "ielts", image: "/tutor8.jpg" },
];

const availableCountries = [
  { name: "Select Country", flag: "" },
  { name: "nigeria", flag: "🇳🇬" },
  { name: "ghana", flag: "🇬🇭" },
  { name: "kenya", flag: "🇰🇪" },
  { name: "united-states", flag: "🇺🇸" },
  { name: "canada", flag: "🇨🇦" },
  { name: "uk", flag: "🇬🇧" },
  { name: "france", flag: "🇫🇷" },
  { name: "germany", flag: "🇩🇪" },
  { name: "india", flag: "🇮🇳" },
  { name: "china", flag: "🇨🇳" },
  { name: "australia", flag: "🇦🇺" },
];

const TutorialCategoriesSlider = () => {
  const [userCountry, setUserCountry] = useState("");
  const [loadingCountry, setLoadingCountry] = useState(true);

  useEffect(() => {
    // Check local storage first
    const savedCountry = localStorage.getItem("selectedCountry");
    if (savedCountry) {
      setUserCountry(savedCountry);
      setLoadingCountry(false);
      return;
    }

    // Otherwise, fetch from IP API
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_name) {
          const formatted = data.country_name.toLowerCase().replace(/\s+/g, "-");
          setUserCountry(formatted);
          localStorage.setItem("selectedCountry", formatted);
        } else {
          setUserCountry("nigeria");
        }
      })
      .catch(() => {
        setUserCountry("nigeria");
      })
      .finally(() => setLoadingCountry(false));
  }, []);

  const handleCountryChange = (e) => {
    setUserCountry(e.target.value);
    localStorage.setItem("selectedCountry", e.target.value);
  };

  return (
    <div className="container my-4">
      <h3 className="mb-2 text-center fs-2">Explore Tutorials:</h3>

      <div className="text-center mb-3">
        {loadingCountry ? (
          <p>🌎 Loading country...</p>
        ) : (
          <select
            value={userCountry}
            onChange={handleCountryChange}
            className="form-select w-auto d-inline-block"
          >
            {availableCountries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.flag} {country.name.replace("-", " ").toUpperCase()}
              </option>
            ))}
          </select>
        )}
      </div>

      <div
        className="d-flex overflow-auto pb-3"
        style={{ gap: "1rem", whiteSpace: "nowrap" }}
      >
        {categories.map((cat, index) => (
          <Link
            href={`/tutorials/${cat.subject}/${userCountry}`}
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
                <small className="text-muted">{userCountry}</small>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TutorialCategoriesSlider;
