import React from "react";
import { Code, Gamepad, Sparkles } from "lucide-react";

const categories = {
  "Major Projects": {
    icon: <Sparkles className="text-yellow-400 w-6 h-6 inline mr-2" />,
    color: "from-yellow-500 to-yellow-300",
    projects: [
      {
        title: "MovieMate",
        desc: "Movie discovery and recommendation app built using React.js.",
        img: "https://plus.unsplash.com/premium_photo-1661675440353-6a6019c95bc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWV8ZW58MHx8MHx8fDA%3D",
        link: "https://abhay-singh-00.github.io/MovieMate/",
      },
      {
        title: "CARPUR",
        desc: "Filter and wishlist cars by price, fuel type, and brand using React.",
        img: "https://plus.unsplash.com/premium_photo-1737522964914-47b0df35a690?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FycHVyJTIwY2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
        link: "https://carpur.netlify.app",
      },
      {
        title: "WorkLog",
        desc: "Performance tracking & compensation system using Java + Spring Boot.",
        img: "https://images.unsplash.com/photo-1509483730228-811e47696246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2xvZ3xlbnwwfHwwfHx8MA%3D%3D",
        link: "https://abhay-singh-00.github.io/WorkLog/",
      },
      {
        title: "Portfolio Generator",
        desc: "Create a personalized portfolio with this portfolio generator.",
        img: "https://images.unsplash.com/photo-1632882765546-1ee75f53becb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydGZvbGlvJTIwZ2VuZXJhdG9yfGVufDB8fDB8fHww",
        link: "https://abhay-singh-00.github.io/Portfolio-Generator/",
      },
    ],
  },
  "Utility Tools": {
    icon: <Code className="text-green-400 w-6 h-6 inline mr-2" />,
    color: "from-green-500 to-green-300",
    projects: [
      {
        title: "Resume Generator",
        desc: "Create professional resumes using this resume builder.",
        img: "https://plus.unsplash.com/premium_photo-1725985758256-2b311864d1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHJlc3VtZSUyMGdlbmVyYXRvcnxlbnwwfHwwfHx8MA%3D%3D",
        link: "https://abhay-rathore.github.io/Resume-Generator/",
      },
      {
        title: "Digital Clock",
        desc: "Real-time digital clock using HTML, CSS, and JavaScript.",
        img: "https://images.unsplash.com/photo-1591436123200-5ccc6511c0e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlnaXRhbCUyMGNsb2NrfGVufDB8fDB8fHww",
        link: "https://abhay-rathore.github.io/Digital-Clock/",
      },
      {
        title: "Age Calculator",
        desc: "Calculate age based on input date using JavaScript logic.",
        img: "https://images.unsplash.com/photo-1611946258523-9c2bfabb94e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFnZSUyMGNhbGN1bGF0b3J8ZW58MHx8MHx8fDA%3D",
        link: "https://abhay-rathore.github.io/Age-Calculator/",
      },
    ],
  },
  Games: {
    icon: <Gamepad className="text-purple-400 w-6 h-6 inline mr-2" />,
    color: "from-purple-500 to-purple-300",
    projects: [
      {
        title: "Tic Tac Toe",
        desc: "Classic game built using HTML, CSS, and JavaScript.",
        img: "https://plus.unsplash.com/premium_photo-1673735396428-d51dc2a7a62d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGljJTIwdGFjJTIwdG9lfGVufDB8fDB8fHww",
        link: "https://abhay-rathore.github.io/Tic-Tac-Toe/",
      },
      {
        title: "Guess the Number Game",
        desc: "A number guessing game built with JavaScript, HTML, and CSS.",
        img: "https://images.unsplash.com/photo-1740062446976-94a8837e0dde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Vlc3MlMjB0aGUlMjBudW1iZXJ8ZW58MHx8MHx8fDA%3D",
        link: "https://abhay-rathore.github.io/Guess-the-Number-Game/",
      },
    ],
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-black text-white"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">
        🚀 My Creative Projects
      </h2>

      <div className="grid gap-20">
        {Object.entries(categories).map(
          ([name, { icon, color, projects }], i) => (
            <div key={i} className="w-full mb-8">
              <h3
                className={`text-3xl font-semibold mb-8 bg-gradient-to-r ${color} text-transparent bg-clip-text`}
              >
                {icon} {name}
              </h3>

              {/* Responsive grid without scrollbars */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {projects.map((proj, idx) => (
                  <ProjectCard key={idx} proj={proj} />
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

function ProjectCard({ proj }) {
  return (
    <div className="w-full perspective">
      <div className="relative w-full h-64 transition-transform duration-700 transform-style-preserve-3d hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl bg-white/10 border border-white/20 backdrop-blur-sm [backface-visibility:hidden]">
          <img
            src={proj.img}
            alt={proj.title}
            className="w-full h-50 object-cover"
            loading="lazy"
          />
          <div className="p-4">
            <h4 className="text-lg font-semibold text-cyan-300 text-center">
              {proj.title}
            </h4>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-800 to-black text-white p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
          <div className="overflow-y-auto max-h-32">
            <p className="text-md text-gray-300">{proj.desc}</p>
          </div>
          <a
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-yellow-300 hover:text-yellow-400 hover:underline"
          >
            🔗 View Project
          </a>
        </div>
      </div>
    </div>
  );
}
