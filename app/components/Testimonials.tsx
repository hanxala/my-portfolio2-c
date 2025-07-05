import React from 'react';
import Image from 'next/image';

interface Testimonial {
  content: string;
  name: string;
  image?: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Client Name",
      image: "/testimonial-placeholder.svg"
    },
    {
      content: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Client Name",
      image: "/testimonial-placeholder.svg"
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Testimonials</h2>
        <p className="text-text-light mb-12 max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-white/20 rounded-lg p-6 bg-white/5">
              <p className="text-text-light mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 overflow-hidden relative">
                  {testimonial.image ? (
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="text-white font-semibold">{testimonial.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}