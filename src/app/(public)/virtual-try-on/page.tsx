import VirtualTryOnClient from "@/app/(public)/virtual-try-on/VirtualTryOnClient";

export const metadata = {
  title: "Virtual Hair Try-On - Linda Hair Salon",
  description:
    "Try different hairstyles and colors virtually before your appointment",
};

export default function VirtualTryOnPage() {
  return <VirtualTryOnClient />;
}
