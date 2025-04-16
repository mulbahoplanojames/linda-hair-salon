import { Brush, Droplet, Scissors, Sparkles } from "lucide-react";
import Image from "next/image";
import services from "@/data/services.json";

const ServicesHero = () => {
  const categories = [...new Set(services.map((service) => service.category))];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Haircuts":
        return <Scissors className="h-4 w-4 mr-2" />;
      case "Coloring":
        return <Droplet className="h-4 w-4 mr-2" />;
      case "Styling":
        return <Brush className="h-4 w-4 mr-2" />;
      case "Treatments":
        return <Sparkles className="h-4 w-4 mr-2" />;
      default:
        return <Scissors className="h-4 w-4 mr-2" />;
    }
  };
  return (
    <>
      <section className=" py-16 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Salon interior"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Our Services
            </h1>
            <p className="text-lg text-white">
              Discover our comprehensive range of hair services designed to meet
              your unique needs and preferences. From classic cuts to the latest
              color trends, our expert stylists are here to help you look and
              feel your best.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className=" flex flex-wrap justify-center mb-12">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-lg px-6"
                >
                  <span className="flex items-center">
                    {getCategoryIcon(category)}
                    {category}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">{category}</h2>
                  <p className="text-muted-foreground mb-8">
                    {category === "Haircuts" &&
                      "Our precision haircuts are tailored to your face shape, hair texture, and personal style."}
                    {category === "Coloring" &&
                      "From subtle highlights to bold transformations, our color services use premium products for vibrant, long-lasting results."}
                    {category === "Styling" &&
                      "Whether it's for a special occasion or everyday elegance, our styling services will help you look your best."}
                    {category === "Treatments" &&
                      "Restore and rejuvenate your hair with our specialized treatments designed to address various hair concerns."}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services
                    .filter((service) => service.category === category)
                    .map((service) => (
                      <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default ServicesHero;
