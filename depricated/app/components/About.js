"use client";

import React, { useEffect, useState, useRef } from "react";
import { Network, ShieldCheck, Cpu, Lightbulb } from "lucide-react"; // Lucide icons

const About = () => {
  const [text, setText] = useState("");
  const [showSignature, setShowSignature] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  const fullText = `BButt Networks delivers secure, high-performance, and innovative networking solutions for businesses and individuals. We combine expertise with creativity to ensure reliable, scalable, and future-ready systems — connecting people and ideas through seamless technology.`;

  // Detect when About section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  // Typewriter effect
  useEffect(() => {
    if (!hasStarted) return;

    let i = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText.charAt(i));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        setTimeout(() => setShowSignature(true), 300);
      }
    }, 20); // faster typing

    return () => clearInterval(interval);
  }, [hasStarted]);

  return (
    <>
      <section
        ref={sectionRef}
        id="about"
        className="mt-15 py-16 px-6 transition-colors cursor-pointer duration-300"
      >
        <div className="max-w-5xl mx-auto text-center bg-gray-900/50 backdrop-blur-lg rounded-2xl shadow-2xl p-10 transform hover:scale-[1.02] transition-all duration-500 border border-white/10 animate-fadeInUp">
          {/* Heading */}
          <h1 className="flex items-center justify-center gap-3 font-extrabold text-[40px] text-white mb-6 tracking-wide drop-shadow-lg animate-slideDown">
            <Network className="w-10 h-10 text-blue-400" />
            About
          </h1>

          {/* Short text */}
          <p className="text-lg text-gray-100 leading-relaxed animate-fadeIn delay-200 whitespace-pre-line">
            {text}
          </p>

          {/* Signature */}
          {showSignature && (
            <div className="mt-4 text-right text-gray-200 italic opacity-0 animate-fadeInSlow">
              — From Our CEO
            </div>
          )}

          {/* Feature icons */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center p-4 bg-gray-800/40 rounded-xl hover:bg-gray-800/60 transition">
              <ShieldCheck className="w-10 h-10 text-green-400 mb-3" />
              <h3 className="text-white font-semibold">Secure Solutions</h3>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800/40 rounded-xl hover:bg-gray-800/60 transition">
              <Cpu className="w-10 h-10 text-purple-400 mb-3" />
              <h3 className="text-white font-semibold">High Performance</h3>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800/40 rounded-xl hover:bg-gray-800/60 transition">
              <Lightbulb className="w-10 h-10 text-yellow-400 mb-3" />
              <h3 className="text-white font-semibold">Innovative Ideas</h3>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800/40 rounded-xl hover:bg-gray-800/60 transition">
              <Network className="w-10 h-10 text-blue-400 mb-3" />
              <h3 className="text-white font-semibold">Reliable Networks</h3>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideDown {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes fadeInSlow {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animate-slideDown {
            animation: slideDown 0.7s ease-out forwards;
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
          .animate-fadeInSlow {
            animation: fadeInSlow 1.2s ease-out forwards;
            animation-delay: 0.3s;
            animation-fill-mode: forwards;
          }
        `}</style>
      </section>
    </>
  );
};

export default About;
