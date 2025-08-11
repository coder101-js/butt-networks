import React from "react";
import { FaNodeJs, FaReact, FaLinux } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiNextdotjs,

} from "react-icons/si";

const skills = [

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-500" />,
    desc: "Utility-first CSS framework for fast UI development.",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
    desc: "Core programming language for interactive web apps.",
  },

  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600" />,
    desc: "JavaScript runtime for server-side development.",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-700" />,
    desc: "Minimal Node.js framework for building APIs and web apps.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-700" />,
    desc: "NoSQL database designed for flexible document storage.",
  },
  {
    name: "React.js",
    icon: <FaReact className="text-cyan-400" />,
    desc: "Library for building component-based user interfaces.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black" />,
    desc: "React framework for building full-stack apps with SSR.",
  },
  {
    name: "Linux Hosting",
    icon: <FaLinux className="text-gray-200" />,
    desc: "Deploy and manage web applications on Linux servers.",
  },
];

const Skills = () => {
  return (
    <section className="Skills py-10 px-5" id="skills">
      <h2 className="text-4xl font-bold font-gray-900 text-center mb-10 flex items-center justify-center gap-3">
        <span role="img" aria-label="briefcase">💼</span> Our Stack
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cursor-pointer gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="SkillsBox transition-scale hover:scale-[1.03] bg-gray-400 shadow-xl rounded-xl p-6 flex flex-col items-center gap-3 text-center hover:shadow-2xl transition duration-300"
          >
            <div className="text-4xl">{skill.icon}</div>
            <h3 className="text-xl font-semibold">{skill.name}</h3>
            <p className="text-sm text-gray-800 SkillsP">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
