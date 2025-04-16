// import BookingForm from "@/components/booking-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Scissors, Clock, Calendar, Users, CreditCard } from "lucide-react";

export const metadata = {
  title: "Book Appointment - Elegance Hair Salon",
  description: "Schedule your next hair appointment with our expert stylists",
};

export default function BookingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Book Your Appointment
            </h1>
            <p className="text-lg text-muted-foreground">
              Schedule your next visit with our expert stylists. Choose your
              preferred service, stylist, and time.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl">
                    Book Your Appointment
                  </CardTitle>
                  <CardDescription>
                    Select your preferred service, stylist, and time slot
                  </CardDescription>
                </CardHeader>
                <CardContent>{/* <BookingForm /> */}</CardContent>
              </Card>
            </div>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Booking Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Scissors className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Service Selection</h3>
                      <p className="text-sm text-muted-foreground">
                        Choose from our range of premium hair services tailored
                        to your needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Stylist Preference</h3>
                      <p className="text-sm text-muted-foreground">
                        Select your preferred stylist or choose "Any Available"
                        for the first available appointment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Date Selection</h3>
                      <p className="text-sm text-muted-foreground">
                        Choose a date that works for you. We're open Monday
                        through Saturday.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Time Selection</h3>
                      <p className="text-sm text-muted-foreground">
                        Select a time slot that's convenient for your schedule.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">No Payment Required</h3>
                      <p className="text-sm text-muted-foreground">
                        No credit card is required to book. Payment is collected
                        at the salon after your service.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cancellation Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We understand that plans change. We request at least 24
                    hours notice for cancellations or rescheduling.
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Late cancellations (less than 24 hours) or no-shows may be
                    subject to a fee equal to 50% of the scheduled service.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
