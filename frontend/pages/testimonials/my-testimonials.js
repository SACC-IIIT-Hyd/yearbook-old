import React, { useState, useEffect } from "react";

const MyTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const dummy_testimonials = [
    {
      author: "John Doe",
      recipient: "Jane Smith",
      content: "A wonderful colleague, always helpful and supportive.",
      createdAt: "2024-02-21T01:04:00Z",
    },
    {
      author: "Mary White",
      recipient: "John Doe",
      content: "A pleasure to work with, highly skilled and dedicated.",
      createdAt: "2024-02-21T01:04:00Z",
    },
  ];
  useEffect(() => {
    // Replace with logic to fetch testimonials from your storage mechanism (e.g., read from localStorage)
    const myTestimonials = dummy_testimonials.filter(
      (testimonial) => testimonial.recipient === "Jane Smith"
    );
    setTestimonials(myTestimonials);
  }, []);

  return (
    <div>
      <h2>Your Testimonials</h2>
      {testimonials.length > 0 ? (
        <ul>
          {testimonials.map((testimonial) => (
            <li key={testimonial.createdAt}>
              <p>
                <b>{testimonial.author}</b>: {testimonial.content}
              </p>
              <p>
                <i>{testimonial.createdAt}</i>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>You haven't received any testimonials yet.</p>
      )}
    </div>
  );
};

export default MyTestimonials;
