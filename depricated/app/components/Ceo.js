"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { User2 } from "lucide-react";

const Ceo = () => {
  const fullText1 =
    "LLeading the company with passion and innovation, driving us towards a brighter future. With years of experience in technology and leadership, Shahnawaz ensures excellence in every project.";

  const fullText2 =
    "EExperienced leader focused on innovation and strategic growth, Wahb Amir drives our vision to success with expertise in business development and technology.";

  const [displayedText1, setDisplayedText1] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");

  const [startTyping1, setStartTyping1] = useState(false);
  const [startTyping2, setStartTyping2] = useState(false);

  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping1(true);
          observer1.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef1.current) observer1.observe(sectionRef1.current);

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping2(true);
          observer2.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef2.current) observer2.observe(sectionRef2.current);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!startTyping1) return;
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText1((prev) => prev + fullText1.charAt(index));
      index++;
      if (index >= fullText1.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [startTyping1, fullText1]);

  useEffect(() => {
    if (!startTyping2) return;
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText2((prev) => prev + fullText2.charAt(index));
      index++;
      if (index >= fullText2.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [startTyping2, fullText2]);

  return (
    <section className="Ceo mt-10 py-5 cursor-pointer" id="ceo">
      <h1 className="text-center font-extrabold text-4xl mb-10 flex items-center justify-center gap-3 text-gray-900 tracking-wide">
        <User2 size={28} />
        Our CEOs
      </h1>

      {/* First CEO */}
      <div
        ref={sectionRef1}
        className="Ceo-Container max-w-5xl mx-auto bg-gray-400 rounded-lg p-10 flex flex-col md:flex-row items-center gap-8 shadow-lg mb-12"
      >
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300 shadow-md">
          <Image
            src="/developer.jpg"
            width={300}
            height={300}
            alt="Shahnawaz Saddam Butt"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center md:text-left flex flex-col items-center md:items-start max-w-xl">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            Shahnawaz Saddam Butt
          </h2>
          <p className="text-lg font-semibold text-gray-700 mb-4">
            Chief Executive Officer
          </p>
          <p className="text-gray-800 leading-relaxed mb-6 min-h-[5rem] whitespace-pre-wrap">
            {displayedText1}
            <span className="animate-blink">|</span>
          </p>

          <a
            href="https://shahnawaz.buttnetworks.com/"
            target="_blank"
            className="w-full md:w-auto"
            rel="noreferrer"
          >
            <button
              className="button px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 
                text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition"
              type="button"
            >
              Get Started
            </button>
          </a>
        </div>
      </div>

      {/* Second CEO */}
      <div
        ref={sectionRef2}
        className="Ceo-Container max-w-5xl mx-auto bg-gray-400 rounded-lg p-10 flex flex-col md:flex-row items-center gap-8 shadow-lg"
      >
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300 shadow-md">
          <Image
            src="/developer2.svg"
            width={300}
            height={300}
            alt="Wahb Amir"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center md:text-left flex flex-col items-center md:items-start max-w-xl">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Wahb Amir</h2>
          <p className="text-lg font-semibold text-gray-700 mb-4">Chief Executive Officer</p>
          <p className="text-gray-800 leading-relaxed mb-6 min-h-[5rem] whitespace-pre-wrap">
            {displayedText2}
            <span className="animate-blink">|</span>
          </p>

          <a
            href="https://wahb.buttnetworks.com/"
            target="_blank"
            className="w-full md:w-auto"
            rel="noreferrer"
          >
            <button
              className="button px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 
                text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition"
              type="button"
            >
              Get Started
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Ceo;
