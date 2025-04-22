import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaReact as FaReactIcon, FaServer, FaBookOpen, FaRobot, FaLaptopCode } from "react-icons/fa";

const LearningRoadmap = () => {
  const roadmap = [
    {
      title: "Java Basics",
      description: "Understand the core concepts of Java and object-oriented programming.",
      year: "2022",
      icon: <FaCode />,
      color: "bg-blue-500",
    },
    {
      title: "Frontend Development",
      description: "Learn the building blocks of web development using HTML, CSS, and JavaScript.",
      year: "2022",
      icon: <FaCode />,
      color: "bg-yellow-500",
    },
    {
      title: "React.js",
      description: "Build dynamic and responsive UIs with React.js.",
      year: "2023",
      icon: <FaReactIcon />,
      color: "bg-teal-500",
    },
    {
      title: "Backend Development",
      description: "Learn to build server-side applications using Node.js and Express.",
      year: "2023",
      icon: <FaServer />,
      color: "bg-green-500",
    },
    {
      title: "Spring Boot",
      description: "Master the Spring Boot framework to build robust Java applications.",
      year: "2024",
      icon: <FaBookOpen />,
      color: "bg-indigo-500",
    },
    {
      title: "Full-Stack Projects",
      description: "Combine front-end and back-end knowledge to build complete applications.",
      year: "2024",
      icon: <FaLaptopCode />,
      color: "bg-purple-500",
    },
    {
      title: "AI Integration",
      description: "Integrate AI-based features into your applications to make them smarter.",
      year: "2025",
      icon: <FaRobot />,
      color: "bg-pink-500",
    },
  ];

  return (
    <section id="roadmap" className="py-16 px-6 md:px-20 bg-gray-900 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
        My Learning Roadmap
      </h2>

      <div className="relative">
        <div className="absolute w-full h-full border-l-4 border-gray-500" style={{ top: "0", left: "50%" }}></div>

        <div className="flex flex-col space-y-12">
          {roadmap.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="relative flex items-center"
            >
              <div className={`flex items-center ${index % 2 !== 0 ? "ml-auto" : ""}`}>
                <div className={`flex justify-center items-center w-20 h-20 ${item.color} rounded-full shadow-lg`}>
                  {item.icon}
                </div>

                <div className="ml-6 flex flex-col text-left">
                  <h3 className="text-xl font-semibold mb-2 text-gradient">{item.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{item.description}</p>
                  <span className="text-xs text-gray-500">{item.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningRoadmap;
