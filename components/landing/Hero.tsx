import { Button } from "@/components/ui/button";
import React from "react";

export default function Hero() {
  return (
    <section className="mb-20 md:mb-0 md:h-screen pt-24 px-4 overflow-x-hidden">
      <div className="container w-full mx-auto mt-10">
        <h1 className="text-4xl md:text-8xl text-center font-semibold tracking-tight bg-gradient-to-r from-blue-500  to-pink-500 bg-clip-text text-transparent p-0 md:p-10">
          Effortlessly Build Portfolios That Highlight Your Unique Story
        </h1>
        <p className="mb-5 text-center opacity-80 mt-10">
          &quot;Showcasing your talent can be tough—we get it! That&apos;s why
          we built Portfolio Generator. <br /> In just minutes, create and share
          stunning portfolios that highlight your work—no coding or hosting
          required.&quot;
        </p>
        <div className="flex gap-2 justify-center items-center pt-6">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="ghost">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
