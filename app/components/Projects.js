"use client"; // add this at the top if you want this component to be client-side

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const Projects = () => {
  return (
    <section id="projects" className="mt-20 mb-10 cursor-pointer px-4">
      <h1 className="ProjectsP text-center text-4xl font-extrabold mb-10 mr-5">
        🚀Our Projects
      </h1>

      <motion.div
        className="flex flex-col md:flex-row md:justify-center md:gap-6 max-w-6xl mx-auto items-stretch"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="Projects max-w-md bg-gray-400 rounded-xl shadow-lg h-auto overflow-hidden transition hover:shadow-2xl flex flex-col"
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
        >
          <Image
            src="/project.png"
            alt="Project Banner"
            width={300}
            height={300}
            className="w-full h-auto object-cover"
          />

          <div className="p-5 text-center flex-grow">
            <h3 className="text-xl font-bold text-gray-800">BoltForm</h3>
            <p className="mt-2 text-sm font-semibold text-gray-700">
              A modern responsive e-commerce store built with Next.js, Tailwind,
              and MongoDB.
            </p>
          </div>
          <a
            href="https://boltform.buttnetworks.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="button px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 
              text-white font-semibold block m-auto rounded-xl mb-3 shadow-lg hover:shadow-2xl hover:scale-105 transition"
            >
              Live Demo
            </button>
          </a>
        </motion.div>

        <motion.div
          className="Projects max-w-md mt-5 md:mt-0 bg-gray-400 rounded-xl shadow-lg h-auto overflow-hidden transition hover:shadow-2xl flex flex-col"
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
        >
          <Image
            src="/project-2.png"
            alt="Project Banner"
            width={1000}
            height={1000}
            className="w-full h-auto object-cover"
          />

          <div className="p-5 text-center flex-grow">
            <h3 className="text-xl  font-bold text-gray-800">Get-a-Developer</h3>
            <p className="mt-2 text-sm font-semibold text-gray-700">
              A modern responsive online website built with Next.js, Tailwind, and
              MongoDB.
            </p>
          </div>
          <a
            href="https://get-a-developer.buttnetworks.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="button px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 
              text-white font-semibold block m-auto rounded-xl shadow-lg mb-3 hover:shadow-2xl hover:scale-105 transition"
            >
              Live Demo
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
