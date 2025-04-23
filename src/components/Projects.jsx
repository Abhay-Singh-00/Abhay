import React, { useEffect, useRef, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { motion } from 'framer-motion';
import { Code, Gamepad, Sparkles } from 'lucide-react';

const categories = {
  "Major Projects": {
    icon: <Sparkles className="text-yellow-400 w-6 h-6 inline mr-2" />,
    color: "from-yellow-500 to-yellow-300",
    projects: [
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
        title: "Portfolio Generator",
        desc: "Create a personalized portfolio with this portfolio generator.",
        img: "https://www.visme.co/wp-content/uploads/2024/06/ai-marketing-plan-row-2.jpg",
        link: "https://abhay-singh-00.github.io/Portfolio-Generator/"
      }
    ]
  },
  "Utility Tools": {
    icon: <Code className="text-green-400 w-6 h-6 inline mr-2" />,
    color: "from-green-500 to-green-300",
    projects: [
      {
        title: "Resume Generator",
        desc: "Create professional resumes using this resume builder.",
        img: "https://images.sftcdn.net/images/t_app-icon-m/p/58522d06-4930-11e8-8349-02420a000b15/479763709/free-resume-builder-cv-maker-templates-pdf-formats-icon.png",
        link: "https://abhay-rathore.github.io/Resume-Generator/"
      },
      {
        title: "Digital Clock",
        desc: "Real-time digital clock using HTML, CSS, and JavaScript.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1pzmBNttKGDhnoa9dHNaRuPIumpRPaYmKOQ&s",
        link: "https://abhay-rathore.github.io/Digital-Clock/"
      },
      {
        title: "Age Calculator",
        desc: "Calculate age based on input date using JavaScript logic.",
        img: "https://play-lh.googleusercontent.com/20EpPSOwFTiDv-ntlpR017NmHJsB1E5eGFIu9BMT_j7RC_IiHsJuuNq2V-8h6wM42d_a",
        link: "https://abhay-rathore.github.io/Age-Calculator/"
      }
    ]
  },
  "Games": {
    icon: <Gamepad className="text-purple-400 w-6 h-6 inline mr-2" />,
    color: "from-purple-500 to-purple-300",
    projects: [
      {
        title: "Tic Tac Toe",
        desc: "Classic game built using HTML, CSS, and JavaScript.",
        img: "https://play-lh.googleusercontent.com/cF84m5Rr_pjRd594Gy7ShkKSIt7AJZBpx9A1Vk2rMKeN-FVUPA_nD7RJu1PKv9gBnw",
        link: "https://abhay-rathore.github.io/Tic-Tac-Toe/"
      },
      {
        title: "Guess the Number Game",
        desc: "A number guessing game built with JavaScript, HTML, and CSS.",
        img: "https://i.ytimg.com/vi/JtMcVvX72wM/maxresdefault.jpg",
        link: "https://abhay-rathore.github.io/Guess-the-Number-Game/"
      }
    ]
  }
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-black text-white w-screen">
      <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">
        🚀 My Creative Projects
      </h2>

      <div className="text-center mb-16">
        <button
          onClick={() => setShowAll(prev => !prev)}
          className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-full font-semibold transition duration-300"
        >
          {showAll ? 'Hide All Projects' : 'Show All Projects'}
        </button>
      </div>

      <div className="grid gap-20">
        {Object.entries(categories).map(([name, { icon, color, projects }], i) => (
          <SliderSection
            key={i}
            name={name}
            icon={icon}
            color={color}
            projects={projects}
            showAll={showAll}
          />
        ))}
      </div>
    </section>
  );
}

function SliderSection({ name, icon, color, projects, showAll }) {
  const sliderRef = useRef(null);
  const [sliderInstanceRef, sliderInstance] = useKeenSlider({
    vertical: true,
    loop: true,
    slides: { perView: 1, spacing: 0 },
    created(s) {
      sliderRef.current = s;
    }
  });

  useEffect(() => {
    if (!showAll) {
      const interval = setInterval(() => {
        sliderRef.current?.moveToIdx(sliderRef.current.track.details.rel + 1);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [showAll]);

  if (showAll) {
    return (
      <div className="mb-8">
        <h3 className={`text-3xl font-semibold mb-4 bg-gradient-to-r ${color} text-transparent bg-clip-text`}>
          {icon} {name}
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} proj={proj} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h3 className={`text-3xl font-semibold mb-4 bg-gradient-to-r ${color} text-transparent bg-clip-text`}>
        {icon} {name}
      </h3>
      <div className="relative h-[360px] overflow-hidden rounded-2xl" ref={sliderInstanceRef}>
        <div className="keen-slider h-full">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="keen-slider__slide h-full flex justify-center items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard proj={proj} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ proj }) {
  return (
    <div className="max-w-xs w-full bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300 mx-auto">
      <img src={proj.img} alt={proj.title} className="w-full h-40 object-cover" loading="lazy" />
      <div className="p-4 flex flex-col justify-between h-[calc(100%-160px)]">
        <div>
          <h4 className="text-lg font-semibold text-cyan-300">{proj.title}</h4>
          <p className="text-sm text-gray-300 mt-1 line-clamp-3">{proj.desc}</p>
        </div>
        <div className="flex-grow" />
        <a
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-yellow-300 hover:text-yellow-400 hover:underline hover:scale-105 transition-transform"
        >
          🔗 View Project
        </a>
      </div>
    </div>
  );
}
