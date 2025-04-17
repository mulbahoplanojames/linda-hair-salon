const Benefits = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Why Finding the Right Stylist Matters
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The perfect stylist-client relationship leads to better results and
            a more enjoyable salon experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-background p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">
              Personalized Experience
            </h3>
            <p className="text-muted-foreground">
              A stylist who understands your hair type and preferences can
              provide tailored recommendations and services.
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Consistent Results</h3>
            <p className="text-muted-foreground">
              Building a relationship with the right stylist ensures more
              consistent and predictable results every visit.
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Hair Health</h3>
            <p className="text-muted-foreground">
              The right stylist will prioritize the health of your hair while
              helping you achieve your desired look.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
