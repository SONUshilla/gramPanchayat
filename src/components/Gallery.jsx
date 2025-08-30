import React, { useState } from "react";

const galleryData = [
  {
    id: 1,
    src: "./images/gallery/bestShot.webp",
    title: "Best View of Village",
    description: "A stunning capture of our village surrounded by green fields.",
  },
  {
    id: 2,
    src: "./images/gallery/development.webp",
    title: "Development in Progress",
    description:
      "Roads, solar lights, and new houses showing the growth of our village.",
  },
  {
    id: 3,
    src: "./images/gallery/progression.webp",
    title: "Journey of Progression",
    description:
      "From traditional mud houses to modern brick homes, see the transformation.",
  },
  {
    id: 4,
    src: "./images/gallery/beforeAfter.webp",
    title: "Before & After",
    description:
      "A creative look at how our village has grown over the years.",
  },
  {
    id: 5,
    src: "./images/gallery/community.webp",
    title: "Community & Culture",
    description:
      "Festivals, togetherness, and the spirit of our people in one frame.",
  },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative py-20 bg-gray-200 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-blue-500/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-indigo-500/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-blue-500 font-medium tracking-wider text-sm uppercase">
              Visual Journey
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Village <span className="text-blue-600">Photo Gallery</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A glimpse into our village's beauty, culture, and transformation journey.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item, index) => (
            <div
              key={item.id}
              className={`relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-500 hover:-translate-y-2 ${
                index % 5 === 1 ? "sm:col-span-2" : ""
              }`}
              onClick={() => setSelected(item)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.description}
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-slate-900/95 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform scale-95 animate-zoomIn flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative flex-1 overflow-hidden">
              <img
                src={selected.src}
                alt={selected.title}
                className="w-full h-full max-h-[60vh] object-contain"
              />
              <button
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold text-slate-700 hover:bg-white transition-all duration-300 hover:scale-110 shadow-md"
                onClick={() => setSelected(null)}
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="p-6 bg-slate-50 border-t border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {selected.title}
              </h3>
              <p className="text-slate-600 mb-4">{selected.description}</p>
              <div className="flex justify-between items-center">
                <a
                  href={selected.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-medium px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  View Full Image
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
                <button
                  onClick={() => setSelected(null)}
                  className="text-slate-500 hover:text-slate-700 font-medium transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dotnoise-light-grey.webp')] opacity-10"></div>
    </section>
  );
};

export default Gallery;