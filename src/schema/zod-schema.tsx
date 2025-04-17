import { z } from "zod";

export const bookingFormSchema = z.object({
  service: z.string({
    message: "Please select a service",
  }),
  stylist: z.string({
    message: "Please select a stylist",
  }),
  date: z.date({
    message: "Please select a date",
  }),
  time: z.string({
    message: "Please select a time",
  }),
  notes: z.string().optional(),
});
