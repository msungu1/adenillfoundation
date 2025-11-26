import React from "react";

const Card = ({ icon, title, children }) => {
  return (
    <div className="flex flex-col bg-background-light dark:bg-background-dark/80 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-indigo text-white p-3 rounded-full">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <h3 className="font-display text-indigo dark:text-primary text-2xl font-bold">{title}</h3>
      </div>
      <p className="text-base font-normal leading-relaxed text-text-light/80 dark:text-text-dark/80">
        {children}
      </p>
    </div>
  );
};

export default Card;
