import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    fallback: "AB",
    content:
      "The portfolio generator was incredibly easy to use. I was able to create a professional-looking portfolio in no time, and the templates were perfect for my needs.",
    name: "Alex Brown",
    role: "Web Developer",
    company: "Tech Solutions Inc.",
  },
  {
    id: 2,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    fallback: "MK",
    content:
      "I love the simplicity and the range of templates offered. It's perfect for someone like me, who doesn't have much experience with web design but wants a clean, responsive portfolio.",
    name: "Maya Kline",
    role: "Graphic Designer",
    company: "Maya Designs",
  },
  {
    id: 3,
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    fallback: "JM",
    content:
      "The portfolio generator gave me everything I needed to showcase my work beautifully. It was intuitive, fast, and the real-time preview feature was incredibly useful.",
    name: "James McArthur",
    role: "Photographer",
    company: "McArthur Studios",
  },
];

export default function Testimonials() {
  return (
    <section className=" md:flex md:justify-center md:items-center bg-background text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl text-foreground font-bold mb-4">
            People Love Us
          </h2>
          <p className="text-secondary-foreground">
            From individuals to enterprises, our clients always leave with a
            smile.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card dark:bg-gray-800 rounded-lg p-6 space-y-4 border border-border dark:border-gray-700 shadow-lg"
            >
              <Avatar>
                <AvatarImage src={testimonial.avatar} />
                <AvatarFallback>{testimonial.fallback}</AvatarFallback>
              </Avatar>

              <blockquote className="text-secondary-foreground italic dark:text-gray-300">
                {testimonial.content}
              </blockquote>
              <div className="text-left">
                <h5 className="text-foreground dark:text-gray-100 text-lg">
                  {testimonial.name}
                </h5>
                <p className="text-foreground dark:text-gray-200 text-sm">
                  {`${testimonial.role}, ${testimonial.company}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
