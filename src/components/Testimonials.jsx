import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';  // Core Swiper CSS
import 'swiper/css/pagination';  // Pagination module CSS
import 'swiper/css/navigation';  // Navigation module CSS
import 'swiper/css/scrollbar';  // Scrollbar module CSS (if used)

const testimonials = [
  { text: 'Abhay\'s work is truly amazing. Highly recommend!', name: 'John Doe', role: 'CEO, Company X' },
  { text: 'I was impressed with the quality of the project.', name: 'Jane Smith', role: 'CTO, Company Y' },
  // Add more testimonials here
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-4xl text-center font-bold text-purple-700 mb-8">What People Say</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
