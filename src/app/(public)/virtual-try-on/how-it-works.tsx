import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our virtual try-on tool uses advanced AI to help you visualize
            different hairstyles and colors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="font-bold text-xl mb-2">Upload Your Photo</h3>
            <p className="text-muted-foreground">
              Upload a front-facing photo or take one with your camera for the
              best results
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="font-bold text-xl mb-2">Try Different Styles</h3>
            <p className="text-muted-foreground">
              Browse through our collection of hairstyles and colors to find
              your perfect match
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="font-bold text-xl mb-2">Book Your Appointment</h3>
            <p className="text-muted-foreground">
              Once you&apos;ve found a style you love, book an appointment with
              one of our expert stylists
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
