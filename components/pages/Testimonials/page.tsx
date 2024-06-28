import Slider from "@/components/Slider";
import { FakeTestimonial } from "@/constants";
import React from "react";
import TestimonialCard from "./testimonialCard";

const Testimonials = () => {
  return (
    <section className="py-[76px] md:pl-6 lg:pl-0 flex flex-col gap-6">
      <h2 className="headlines md:displays lg:displaym text-secondary-oncontainer">
      What our guests are saying
      </h2>
      <div className="carousel carousel-center max-w-full p-1 space-x-6">
        {FakeTestimonial.map((testimonial, index) => (
          <div className="carousel-item" key={index}>
            <TestimonialCard card={testimonial} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
