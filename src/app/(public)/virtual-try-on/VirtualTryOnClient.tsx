"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import {
  Upload,
  Camera,
  Scissors,
  RefreshCw,
  Download,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import HowItWorks from "./how-it-works";

const hairstyles = [
  {
    id: "style1",
    name: "Bob Cut",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "style2",
    name: "Long Layers",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "style3",
    name: "Pixie Cut",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "style4",
    name: "Beach Waves",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "style5",
    name: "Blunt Bangs",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "style6",
    name: "Shag Cut",
    image: "/placeholder.svg?height=150&width=150",
  },
];

const hairColors = [
  { id: "color1", name: "Natural Black", color: "#0f0f0f" },
  { id: "color2", name: "Dark Brown", color: "#3b2417" },
  { id: "color3", name: "Chestnut", color: "#754c24" },
  { id: "color4", name: "Caramel Blonde", color: "#c19a6b" },
  { id: "color5", name: "Platinum Blonde", color: "#e6d7ab" },
  { id: "color6", name: "Auburn Red", color: "#a52a2a" },
  { id: "color7", name: "Vibrant Red", color: "#d93636" },
  { id: "color8", name: "Rose Gold", color: "#eea9a1" },
  { id: "color9", name: "Pastel Purple", color: "#c8a2c8" },
  { id: "color10", name: "Teal Blue", color: "#008080" },
];

export default function VirtualTryOnClient() {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [brightness, setBrightness] = useState([100]);
  const [contrast, setContrast] = useState([100]);
  const [isCapturing, setIsCapturing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle camera capture
  const startCamera = async () => {
    setIsCapturing(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      setIsCapturing(false);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);

        const imageDataUrl = canvasRef.current.toDataURL("image/png");
        setUserImage(imageDataUrl);

        // Stop the camera stream
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
        setIsCapturing(false);
      }
    }
  };

  const resetImage = () => {
    setUserImage(null);
    setSelectedStyle(null);
    setSelectedColor(null);
    setBrightness([100]);
    setContrast([100]);
  };

  // Simulate downloading the image
  const downloadImage = () => {
    if (!userImage) return;

    // In feature updates, this would combine the user's image with the selected hairstyle
    // For now, we'll just download the user's image
    const link = document.createElement("a");
    link.href = userImage;
    link.download = "linda-salon-virtual-try-on.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Clean up camera resources when component unmounts
  useEffect(() => {
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Virtual Hair Try-On
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Upload your photo or use your camera to virtually try different
              hairstyles and colors before your appointment. Find your perfect
              look with our interactive tool!
            </p>
          </div>
        </div>
      </section>

      {/* Try-On Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Image Upload/Display Area */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  {!userImage && !isCapturing ? (
                    <div className="flex flex-col items-center justify-center h-[500px] bg-muted/30 p-8">
                      <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold mb-2">
                          Start Your Virtual Try-On
                        </h2>
                        <p className="text-muted-foreground">
                          Upload a front-facing photo or use your camera
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          onClick={() => fileInputRef.current?.click()}
                          className="flex items-center gap-2"
                        >
                          <Upload className="h-4 w-4" />
                          Upload Photo
                        </Button>
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileUpload}
                          accept="image/*"
                          className="hidden"
                        />
                        <Button
                          variant="outline"
                          onClick={startCamera}
                          className="flex items-center gap-2"
                        >
                          <Camera className="h-4 w-4" />
                          Use Camera
                        </Button>
                      </div>
                    </div>
                  ) : isCapturing ? (
                    <div className="relative">
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        className="w-full h-[500px] object-cover"
                      />
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                        <Button
                          onClick={capturePhoto}
                          className="flex items-center gap-2"
                        >
                          <Camera className="h-4 w-4" />
                          Take Photo
                        </Button>
                      </div>
                      <canvas ref={canvasRef} className="hidden" />
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src={
                          userImage || "/placeholder.svg?height=500&width=800"
                        }
                        alt="Your photo"
                        className="w-full h-[500px] object-cover"
                        style={{
                          filter: `brightness(${brightness[0]}%) contrast(${contrast[0]}%)`,
                        }}
                      />
                      {selectedStyle && (
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                          {/* This is where the hairstyle overlay would be rendered */}
                          {/* In a real implementation, this would use advanced image processing */}
                          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                            {
                              hairstyles.find(
                                (style) => style.id === selectedStyle
                              )?.name
                            }
                          </div>
                        </div>
                      )}
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={resetImage}
                          className="flex items-center gap-1"
                        >
                          <RefreshCw className="h-3 w-3" />
                          Reset
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={downloadImage}
                          className="flex items-center gap-1"
                        >
                          <Download className="h-3 w-3" />
                          Save
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="flex items-center gap-1"
                        >
                          <Share2 className="h-3 w-3" />
                          Share
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {userImage && (
                <div className="mt-6 space-y-4">
                  <div>
                    <Label>Brightness</Label>
                    <Slider
                      value={brightness}
                      onValueChange={setBrightness}
                      min={50}
                      max={150}
                      step={1}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label>Contrast</Label>
                    <Slider
                      value={contrast}
                      onValueChange={setContrast}
                      min={50}
                      max={150}
                      step={1}
                      className="mt-2"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Style Selection Area */}
            {userImage && (
              <div className="lg:col-span-1">
                <Tabs defaultValue="styles">
                  <TabsList className="w-full grid grid-cols-2 mb-6">
                    <TabsTrigger value="styles">Hairstyles</TabsTrigger>
                    <TabsTrigger value="colors">Hair Colors</TabsTrigger>
                  </TabsList>

                  <TabsContent value="styles" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {hairstyles.map((style) => (
                        <motion.div
                          key={style.id}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                            selectedStyle === style.id
                              ? "border-primary"
                              : "border-transparent"
                          }`}
                          onClick={() => setSelectedStyle(style.id)}
                        >
                          <div className="relative aspect-square">
                            <img
                              src={style.image || "/placeholder.svg"}
                              alt={style.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-2 text-center text-sm font-medium">
                            {style.name}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="colors">
                    <RadioGroup
                      value={selectedColor || ""}
                      onValueChange={setSelectedColor}
                    >
                      <div className="grid grid-cols-2 gap-4">
                        {hairColors.map((color) => (
                          <div
                            key={color.id}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem
                              value={color.id}
                              id={color.id}
                              className="sr-only"
                            />
                            <Label
                              htmlFor={color.id}
                              className={`flex items-center space-x-2 rounded-md border p-2 cursor-pointer transition-all hover:bg-muted ${
                                selectedColor === color.id
                                  ? "border-primary bg-primary/5"
                                  : "border-muted"
                              }`}
                            >
                              <div
                                className="w-6 h-6 rounded-full"
                                style={{ backgroundColor: color.color }}
                              ></div>
                              <span>{color.name}</span>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </TabsContent>
                </Tabs>

                <div className="mt-8">
                  <Button className="w-full" asChild>
                    <a href="/booking">
                      <Scissors className="mr-2 h-4 w-4" />
                      Book Appointment with This Style
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <HowItWorks />
    </main>
  );
}
