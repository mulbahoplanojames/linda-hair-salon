import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "../animated-section";
import { AnimatedGradientText } from "../animated-gradient-text";
import { ArrowRight, Calendar } from "lucide-react";

const HomeHero = () => {
  return (
    <section className="relative h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Salon interior"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection
          direction="up"
          delay={0.2}
          className="max-w-2xl text-white"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-sm font-medium backdrop-blur-sm mb-5">
            The Ultimate Shopping Experience
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Discover Your
            <AnimatedGradientText
              text="Perfect Style"
              from="from-white"
              to="to-primary/70"
            />
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Expert stylists, premium products, and a relaxing atmosphere for the
            ultimate hair experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105 text-white"
            >
              <Link href="/booking">
                Book Appointment <Calendar className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/services">
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HomeHero;
