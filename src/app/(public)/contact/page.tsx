import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  CreditCard,
  Smile,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Contact Us - Linda Hair Salon",
  description: "Get in touch with our team for inquiries or support",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions or need assistance? We&apos;re here to help. Reach
              out to our team for appointments, inquiries, or feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as
                    soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>{/* <ContactForm /> */}</CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Our Location</h3>
                      <p className="text-muted-foreground">
                        123 Beauty Street, City, State 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Phone</h3>
                      <p className="text-muted-foreground">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-muted-foreground">
                        info@elegancesalon.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Hours</h3>
                      <div className="text-muted-foreground">
                        <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                        <p>Saturday: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Find Us</h2>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  {/* Replace with actual Google Maps embed */}
                  <div className="w-full h-full flex items-center justify-center bg-muted">
                    <p className="text-muted-foreground">Google Maps Embed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Salon Information
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know before your visit
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">Parking</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Free parking is available in our dedicated lot behind the
                  salon. Street parking is also available with a 2-hour limit.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">Payment Options</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept all major credit cards, cash, and mobile payment
                  options including Apple Pay and Google Pay.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Smile className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">First Visit</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  New clients should arrive 15 minutes early to complete a
                  consultation form. Receive 10% off your first service!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to our most commonly asked questions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold text-lg mb-2">
                What is your cancellation policy?
              </h3>
              <p className="text-muted-foreground mb-6">
                We require 24 hours notice for cancellations. Late cancellations
                or no-shows may be subject to a fee equal to 50% of the
                scheduled service.
              </p>

              <h3 className="font-bold text-lg mb-2">
                Do you offer gift cards?
              </h3>
              <p className="text-muted-foreground mb-6">
                Yes! Gift cards are available for purchase in-store or online
                and can be used for any service or product.
              </p>

              <h3 className="font-bold text-lg mb-2">
                What if I&apos;m running late?
              </h3>
              <p className="text-muted-foreground">
                Please call us if you&apos;re running late. We&apos;ll do our
                best to accommodate you, but arrivals more than 15 minutes late
                may need to be rescheduled.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">
                Do you offer consultations?
              </h3>
              <p className="text-muted-foreground mb-6">
                Yes, we offer complimentary 15-minute consultations for new
                clients or for existing clients considering a significant
                change.
              </p>

              <h3 className="font-bold text-lg mb-2">
                What products do you use?
              </h3>
              <p className="text-muted-foreground mb-6">
                We use professional-grade products from brands like Aveda,
                Oribe, and Kérastase. All products used are available for
                purchase in our salon.
              </p>

              <h3 className="font-bold text-lg mb-2">
                Do you have a referral program?
              </h3>
              <p className="text-muted-foreground">
                Yes! Refer a friend and receive 15% off your next service when
                they book their first appointment.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/booking">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
