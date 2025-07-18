import { useRouter } from "next/router";
import { useState } from "react";
import tutors from "@/components/data/tutors";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import TutorCard from "@/components/TutorCard";

export default function TutorProfile() {
  const [visibleCount, setVisibleCount] = useState(4);
  const router = useRouter();
  const { id } = router.query;

  const tutor = tutors.find((t) => t.id === parseInt(id));

  if (!tutor) return <p className="text-center my-5">Tutor not found</p>;

  const {
    firstName,
    city,
    state,
    country,
    subject,
    rating,
    reviewsCount,
    pricePerHour,
    offersOnline,
    offersPhysical,
    image,
    about,
    aboutLesson,
    youtube,
    reviews,
  } = tutor;

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const embedLink = youtube?.replace("watch?v=", "embed/");

  // 🔁 Recommended Tutors Logic (subject is string)
  const recommendedTutors = tutors
  .filter((t) => t.id !== tutor.id)
  .filter(
    (t) =>
      t.subject === subject &&
      (t.city === city || (offersOnline && t.offersOnline))
  )
  .slice(0, 6);


  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col md={4}>
          <Card className="shadow border-0">
            <Card.Img variant="top" src={image} className="rounded" />
          </Card>
        </Col>
        <Col md={8}>
          <h2 className="fw-bold">{firstName}</h2>
          <h5 className="text-secondary">{subject} Tutor</h5>
          <p className="mb-1">
            <strong>Location:</strong> {city}, {state}, {country}
          </p>
          <p className="mb-1">
            <strong>Mode:</strong>{" "}
            {offersOnline && (
              <Badge bg="dark" className="me-1">
                Online
              </Badge>
            )}
            {offersPhysical && <Badge bg="secondary">In Person</Badge>}
          </p>
          <p className="mb-1">
            <strong>Rating:</strong>{" "}
            <span className="text-warning">
              {rating} ★
            </span>{" "}
            ({reviewsCount} reviews)
          </p>
          <p className="mb-3">
            <strong>Price:</strong>{" "}
            <span className="text-gold">${pricePerHour} / hr</span>
          </p>
          <Button variant="warning" className="text-dark fw-bold rounded-pill px-4">
            Contact / Book
          </Button>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6}>
          <h4 className="fw-bold text-dark border-bottom pb-2 mb-3">About {firstName}</h4>
          <p style={{ lineHeight: "1.7" }}>{about}</p>
        </Col>
        <Col md={6}>
          <h4 className="fw-bold text-dark border-bottom pb-2 mb-3">About the Lesson</h4>
          <p style={{ lineHeight: "1.7" }}>{aboutLesson}</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h3 className="text-dark fw-bold">Reviews and Recommendations</h3>
        </Col>
      </Row>

      <Row>
        {reviews.slice(0, visibleCount).map((review) => (
          <Col key={review.id} md={6} className="mb-4">
            <Card className="h-100 shadow-sm border-0" style={{ backgroundColor: "#f8f9fa", borderRadius: "1rem" }}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0 fw-semibold text-dark">{review.name || "Anonymous"}</h6>
                  <small className="text-muted">
                    {new Date(review.date).toLocaleDateString()}
                  </small>
                </div>
                <div className="d-flex align-items-center mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill text-warning me-1"></i>
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <i key={i} className="bi bi-star text-warning me-1"></i>
                  ))}
                  <span className="ms-2 small text-muted">({review.rating}/5)</span>
                </div>
                <p className="text-secondary fst-italic mb-0">"{review.comment}"</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {visibleCount < reviews.length && (
        <div className="text-center mt-3">
          <button
            onClick={handleSeeMore}
            className="btn btn-outline-dark px-4 py-2 rounded-pill"
          >
            See More Reviews
          </button>
        </div>
      )}

      {embedLink && (
        <Row className="mt-5">
          <Col>
            <h5 className="fw-bold text-dark mb-3">{firstName + `'`}s Video</h5>
            <div className="ratio ratio-16x9 rounded shadow-sm">
              <iframe
                src={embedLink}
                title={`Intro video by ${firstName}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Col>
        </Row>
      )}

      <h4 className="fw-bold text-dark mt-5">Recommended Tutors</h4>
<div className="row">
  {recommendedTutors.map((t) => (
    <div className="col-md-4 mb-4" key={t.id}>
      <TutorCard
        image={t.image}
        firstName={t.firstName}
        city={t.city}
        doesPhysical={t.offersPhysical}
        doesOnline={t.offersOnline}
        subject={t.subject}
        shortDesc={t.shortDesc}
        rating={t.rating}
        reviewsCount={t.reviewsCount}
        pricePerHour={t.pricePerHour}
      />
    </div>
  ))}
  {recommendedTutors.length === 0 && (
    <p className="text-muted ps-3">No other tutors to recommend at this time.</p>
  )}
</div>


    </Container>
  );
}
