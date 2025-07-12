import React from "react";
import { Badge } from "react-bootstrap";
import { FaStar } from "react-icons/fa"; // ← Add FontAwesome star

const TutorCard = ({
  image,
  firstName,
  city,
  doesPhysical,
  doesOnline,
  subject,
  shortDesc,
  rating,         // ← new prop
  reviewsCount,
  pricePerHour,
}) => {
  return (
    <div className="card h-100 shadow-sm tutor-card">
      <img
        src={image}
        className="card-img-top"
        alt={firstName}
        style={{ objectFit: "cover", height: "220px" }}
      />
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <h5 className="card-title mb-0">{firstName}</h5>
          <span className="text-success fw-bold">{pricePerHour} ₦/hr</span>
        </div>
        <div className="mb-2">
          {doesPhysical && (
            <Badge bg="primary" className="me-1">
              {city}
            </Badge>
          )}
          {doesOnline && <Badge bg="success">Webcam</Badge>}
        </div>
        <h6 className="text-muted mb-2">{subject}</h6>
        <p className="card-text flex-grow-1" style={{ fontSize: "0.9rem" }}>
          {shortDesc}...
        </p>
        <div className="text-muted d-flex align-items-center" style={{ fontSize: "0.85rem" }}>
          <FaStar color="#f5c518" className="me-1" /> {/* Star icon */}
          <span>{rating}</span>
          <span className="ms-1">({reviewsCount} review{reviewsCount !== 1 && "s"})</span>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
