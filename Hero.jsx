import React from 'react';

function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        
        {/* Profile Image */}
        <div className="relative mb-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <img
              src="https://i.postimg.cc/5yn8bmc5/Picsart-25-01-01-16-45-12-503-1.jpg"
              alt="Devang Gohil "
              className="relative w-40 h-40 object-cover rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300"
            />
            
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-fade-in leading-tight">
          DEVANG DINESH GOHIL
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-700 font-medium mb-4">
          ARTIFICIAL INTELLIGENCE AND DATA SCIENCE STUDENT 
          <p>
            BATCH 2025 
          </p>
        </p>
        <p className="text-gray-600 mb-6">
          Building Tech with Purpose. Learning, Creating, Growing.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a href="#portfolio" className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">
            View Project
          </a>
          {/* <a href="#contact" className="bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded-full shadow-lg hover:bg-blue-50 transition">
            Get in Touch
          </a> */}
          <a href="/assets/Devang-Gohil-Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-100 px-5 py-2 rounded-full text-sm hover:shadow-md transition">
            <img src="https://img.icons8.com/ios-filled/24/download.png" alt="Download" />
            Download CV
          </a>
        </div>

        {/* Skills */}
        {/* <div className="flex flex-wrap justify-center gap-2 mb-6">
          {['Excel', 'Power BI', 'SQL', 'Python'].map((skill, index) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {skill}
            </span>
          ))}
        </div> */}

        {/* Education */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 inline-block">
          <p className="text-lg text-gray-700 font-medium">
            🎓 BE in AI & Data Science
          </p>
          <p className="text-gray-600">
            University of Mumbai • Graduating 2025
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
