import React from 'react';

const testimonials = [
  { name: 'John Doe', feedback: 'This software has streamlined our therapy process and made case management so much easier!', role: 'Therapist' },
  { name: 'Jane Smith', feedback: 'I love how easy it is to track therapy progress and receive feedback from my supervisor.', role: 'Therapist' },
  { name: 'Emily Brown', feedback: 'As a supervisor, I can efficiently manage multiple cases and provide prompt feedback.', role: 'Supervisor' },
];

const Testimonial = () => {
  return (
    <div className="bg-white py-12">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">What People Are Saying</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[rgb(249,248,240)] p-6 shadow-lg rounded-lg">
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
              <h3 className="text-xl font-bold text-gray-800 mt-4">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
