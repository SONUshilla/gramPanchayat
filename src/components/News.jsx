import React from "react";
import { news } from "../data";

const News = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-blue-500/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-indigo-500/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-blue-500 font-medium tracking-wider text-sm uppercase">
              Latest Updates
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            News & <span className="text-blue-600">Announcements</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Stay informed with the latest happenings, development programs,
            and community initiatives from our Panchayat.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-16 overflow-hidden">
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs font-semibold px-3 py-2 rounded-full shadow-md">
                  {new Date(item.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <a
                  href={item.link}
                  className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600 transition-colors duration-300 group/readmore"
                >
                  Read more
                  <svg className="w-4 h-4 ml-2 transform group-hover/readmore:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a
            href="/news"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All News
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dotnoise-light-grey.png')] opacity-10"></div>
    </section>
  );
};

export default News;