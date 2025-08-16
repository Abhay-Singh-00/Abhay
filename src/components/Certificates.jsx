import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const certificates = [

  {
    title: "Introduction to Programming in C",
    issuer: "Nptel",
    date: "2023",
    imageUrl: "https://i.imgur.com/JcH4XNX_d.webp?maxwidth=128&shape=square", // Updated direct Imgur link for CSS certificate
    link: "https://drive.google.com/file/d/16dK5JMbYwlvKy8a9hd6901VS39uyDTUG/view?usp=drive_link",
  },
  {
    title: "CSS",
    issuer: "Infosys Springboard",
    date: "2024",
    imageUrl: "https://i.imgur.com/KdsBeHo.png", // Updated direct Imgur link for CSS certificate
    link: "https://drive.google.com/file/d/16dK5JMbYwlvKy8a9hd6901VS39uyDTUG/view?usp=drive_link",
  },
  {
    title: "HTML5,",
    issuer: "Infosys Springboard",
    date: "2024",
    imageUrl: "https://i.imgur.com/OyLEc9H.png", // Updated direct Imgur link for CSS certificate
    link: "https://example.com/infosys-css-js",
  },
  {
    title: "Database Management System",
    issuer: "Infosys Springboard",
    date: "2024",
    imageUrl: "https://i.imgur.com/ZcpidXA.png", // Updated direct Imgur link for CSS certificate
    link: "https://example.com/infosys-css-js",
  },
  {
    title: "Fundamentals of Java",
    issuer: "Coursera",
    date: "2025",
    imageUrl: "https://i.imgur.com/5fctLoC.png",
    link: "https://example.com/fundamentals-java",
  },
  {
    title: "Web Development in React.js",
    issuer: "Coursera",
    date: "2025",
    imageUrl: "https://i.imgur.com/1sctBJu.png",
    link: "https://coursera.org/share/519570ef2c94424b15373d3cb2f75861",
  },
];

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-gray-700"
    onClick={onClick}
  >
    <ChevronLeft size={32} />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-gray-700"
    onClick={onClick}
  >
    <ChevronRight size={32} />
  </div>
);

const Certificates = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
   <section className="py-20 bg-gray-100 text-center relative overflow-hidden">
  <h2 className="text-4xl font-semibold text-gray-800 mb-12">
    My Certificates
  </h2>
  <div className="px-8 overflow-hidden">
    <Slider {...settings}>
      {certificates.map((cert, index) => (
        <div key={index} className="px-4">
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-left overflow-hidden">
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {cert.issuer} - {cert.date}
                </p>
              </div>
            </a>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>
  );
};

export default Certificates;
