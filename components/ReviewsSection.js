import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Chibunna",
    city: "Lagos",
    image: "/reviewer1.jpg",
    rating: 5,
    text: "My English tutor helped me score Band 8 in IELTS! Highly recommend.",
  },
  {
    id: 2,
    name: "David",
    city: "Accra",
    image: "/reviewer2.jpg",
    rating: 4,
    text: "Great physics lessons — made the subject so easy to understand!",
  },
  {
    id: 3,
    name: "Fatima",
    city: "Abuja",
    image: "/reviewer3.jpg",
    rating: 5,
    text: "Loved the dance classes. The tutor was patient and fun!",
  },
  {
    id: 4,
    name: "John",
    city: "Nairobi",
    image: "/reviewer4.jpg",
    rating: 5,
    text: "Learned coding from scratch and got my first freelance job.",
  },
];

const ReviewsSection = () => {
  return (
    <div className="container my-5">
      <h3 className="text-center fs-2 mb-4">💬 What our students say</h3>
      <div className="row">
        {reviews.map((review) => (
          <div className="col-md-3 mb-4" key={review.id}>
            <div className="card h-100 shadow-sm text-center">
              <Image
                src={review.image}
                alt={review.name}
                width={80}
                height={80}
                className="rounded-circle mx-auto mt-3"
              />
              <div className="card-body">
                <h6 className="card-title mb-1">{review.name}</h6>
                <small className="text-muted">{review.city}</small>
                <p className="card-text mt-2" style={{ fontSize: "0.9rem" }}>
                  "{review.text}"
                </p>
                <div>
                  {"⭐".repeat(review.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
