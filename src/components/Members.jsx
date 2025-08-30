import React from "react";
import { members } from "../data";

const Members = () => {
  return (
    <section className="relative py-20 bg-blue-100  overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-blue-500/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-blue-500 font-medium tracking-wider text-sm uppercase">
              Our Leadership
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Panchayat <span className="text-blue-600">Members</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Meet the dedicated individuals working tirelessly to ensure growth,
            transparency, and welfare in our village.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-slate-100 group"
            >
              {/* Image with gradient overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                
                {/* Name and role overlay */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white drop-shadow-md">
                    {member.name}
                  </h3>
                  <p className="text-blue-300 font-medium">{member.role}</p>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                {/* Ward */}
                <div className="mb-4 flex items-center text-slate-700">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <span>Ward {member.ward}</span>
                </div>

                {/* Phone */}
                <div className="flex items-center text-slate-700">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <a
                    href={`tel:${member.phone}`}
                    className="font-medium hover:text-blue-600 transition-colors"
                  >
                    {member.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dotnoise-light-grey.png')] opacity-10"></div>
    </section>
  );
};

export default Members;