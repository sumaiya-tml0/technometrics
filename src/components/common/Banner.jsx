import React from "react";

const Banner = ({ title, bannerImg }) => {
  return (
    <div
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 sm:px-8 lg:px-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bannerImg})`,
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 75% 92%, 50% 85%, 25% 92%, 0 85%)",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
          <span style={{ WebkitTextStroke: "2px white", color: "transparent" }}>
            {title}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Banner;
