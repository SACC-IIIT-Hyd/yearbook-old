import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Testimonial = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Head>
        <title>Testimonials</title>
      </Head>
      <nav>
        <Link href="/request-testimonials">Request</Link>
        <Link href="/write-testimonial">Write Testimonial</Link>
        <Link href="/my-testimonials">My Testimonials</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Testimonial;