import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-col items-center mb-16 relative">
      {/* Logo Container */}
      <div className="relative group">
        {/* Logo */}
        <div className="relative">
          <img
            src="/logo/logo.png"
            alt="Catering Logo"
            className="w-72 md:w-96 transition-transform duration-300 group-hover:scale-105 rounded-full"
          />
        </div>
      </div>

      {/* Tagline */}
      <p className="mt-6 text-dark/80 text-lg md:text-xl font-serif font-medium italic">
        Lezzetin ve Kalitenin Buluşma Noktası
      </p>
    </div>
  );
};

export default Logo;
