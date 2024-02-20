import React, { useState } from 'react';
import { useRouter } from 'next/router';

const WriteTestimonial = () => {
  const router = useRouter();
  const [author, setAuthor] = useState('');
  const [recipient, setRecipient] = useState('');
  const [content, setContent] = useState('');
  const Author='Jane Doe'

  const dummy_testimonials=[{
    "author": "John Doe",
    "recipient": "Jane Smith",
    "content": "A wonderful colleague, always helpful and supportive.",
    "createdAt": "2024-02-21T01:04:00Z"
  },
  {
    "author": "Mary White",
    "recipient": "John Doe",
    "content": "A pleasure to work with, highly skilled and dedicated.",
    "createdAt": "2024-02-21T01:04:00Z"
  }]

  const handleSubmit = (event) => {
    event.preventDefault();
    // Replace with logic to store the testimonial data (e.g., send to an API)
    const newTestimonial = { Author, recipient, content };
    // Add dummy logic to simulate storing new testimonial
    
    dummy_testimonials.push(newTestimonial);

    // Clear form after successful submission
    setAuthor('');
    setRecipient('');
    setContent('');
    console.log(dummy_testimonials)
    // Show success message or redirect to another page
    router.push('/testimonials/my-testimonials');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for author, recipient, and content */}
      <button type="submit">Submit Testimonial</button>
    </form>
  );
};

export default WriteTestimonial;