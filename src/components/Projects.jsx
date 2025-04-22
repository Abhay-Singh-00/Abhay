import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 md:px-20 bg-gray-950">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-cyan-400">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "MovieMate",
            desc: "Movie discovery and recommendation app built using React.js.",
            img: "https://imag.malavida.com/mvimgbig/download-fs/moviemate-28893-0.jpg",
            link: "https://abhay-singh-00.github.io/MovieMate/"
          },
          {
            title: "CarFinder Web App",
            desc: "Filter and wishlist cars by price, fuel type, and brand using React.",
            img: "https://www.shutterstock.com/image-illustration/find-car-check-concept-symbol-600nw-2060424533.jpg",
            link: "https://abhay-singh-00.github.io/car-finder/"
          },
          {
            title: "WorkLog",
            desc: "Performance tracking & compensation system using Java + Spring Boot.",
            img: "https://cdn0.iconfinder.com/data/icons/work-from-home-19/512/WorkLog-dailytimesheet-workcalendar-software-timemanagement-512.png",
            link: "https://abhay-singh-00.github.io/WorkLog/"
          },
          {
            title: "Resume Generator",
            desc: "Create professional resumes using this resume builder.",
            img: "https://images.sftcdn.net/images/t_app-icon-m/p/58522d06-4930-11e8-8349-02420a000b15/479763709/free-resume-builder-cv-maker-templates-pdf-formats-icon.png",
            link: "https://abhay-rathore.github.io/Resume-Generator/"
          },
          {
            title: "Tic Tac Toe",
            desc: "Classic game built using HTML, CSS, and JavaScript.",
            img: "https://play-lh.googleusercontent.com/cF84m5Rr_pjRd594Gy7ShkKSIt7AJZBpx9A1Vk2rMKeN-FVUPA_nD7RJu1PKv9gBnw",
            link: "https://abhay-rathore.github.io/Tic-Tac-Toe/"
          },
          {
            title: "Digital Clock",
            desc: "Digital clock with real-time time display built using HTML, CSS, and JavaScript.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1pzmBNttKGDhnoa9dHNaRuPIumpRPaYmKOQ&s",
            link: "https://abhay-rathore.github.io/Digital-Clock/"
          },
          {
            title: "Guess the Number Game",
            desc: "A number guessing game built with JavaScript, HTML, and CSS.",
            img: "https://i.ytimg.com/vi/JtMcVvX72wM/maxresdefault.jpg",
            link: "https://abhay-rathore.github.io/Guess-the-Number-Game/"
          },
          {
            title: "Age Calculator",
            desc: "Calculate age based on input date using JavaScript logic.",
            img: "https://play-lh.googleusercontent.com/20EpPSOwFTiDv-ntlpR017NmHJsB1E5eGFIu9BMT_j7RC_IiHsJuuNq2V-8h6wM42d_a",
            link: "https://abhay-rathore.github.io/Age-Calculator/"
          },
          {
            title: "Portfolio Generator",
            desc: "Create a personalized portfolio with this portfolio generator.",
            img: "https://www.visme.co/wp-content/uploads/2024/06/ai-marketing-plan-row-2.jpg",
            link: "https://abhay-singh-00.github.io/Portfolio-Generator/"
          }
        ].map((proj, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-purple-300">{proj.title}</h3>
            <p className="text-sm text-gray-300">{proj.desc}</p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-cyan-400 hover:underline"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
