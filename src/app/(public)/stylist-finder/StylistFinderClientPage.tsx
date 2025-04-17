"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, CheckCircle, Star } from "lucide-react";
import { questions, stylistMatching, stylists } from "@/data/data";
import Hero from "@/components/hero";
import Benefits from "./benefits";

export default function StylistFinderClientPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [matchedStylists, setMatchedStylists] = useState<any[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleAnswer = (answerId: string) => {
    setSelectedOption(answerId);
  };

  const handleNext = () => {
    if (selectedOption) {
      // Save the answer
      const questionId = questions[currentQuestion].id;
      setAnswers({ ...answers, [questionId]: selectedOption });

      // Move to next question or finish quiz
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        // Calculate matches
        findMatches({ ...answers, [questionId]: selectedOption });
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[questions[currentQuestion - 1].id] || null);
    }
  };

  const findMatches = (finalAnswers: Record<string, string>) => {
    // Calculate match scores for each stylist
    const scores = stylistMatching.map((stylist) => {
      let score = 0;

      // Hair type match (q1)
      if (stylist.matchCriteria.hairTypes.includes(finalAnswers.q1)) {
        score += 20;
      }

      // Services match (q2)
      if (stylist.matchCriteria.services.includes(finalAnswers.q2)) {
        score += 25;
      }

      // Experience match (q3)
      if (
        stylist.matchCriteria.experience === finalAnswers.q3 ||
        finalAnswers.q3 === "any"
      ) {
        score += 15;
      }

      // Style match (q4)
      if (stylist.matchCriteria.style.includes(finalAnswers.q4)) {
        score += 25;
      }

      // Visit frequency match (q5)
      if (stylist.matchCriteria.visitFrequency.includes(finalAnswers.q5)) {
        score += 15;
      }

      return {
        ...stylist,
        matchScore: score,
        // Find the full stylist data
        ...stylists.find((s) => s.id === stylist.id),
      };
    });

    // Sort by match score (highest first)
    const sortedMatches = scores.sort((a, b) => b.matchScore - a.matchScore);

    setMatchedStylists(sortedMatches);
    setQuizComplete(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setMatchedStylists([]);
    setQuizComplete(false);
    setSelectedOption(null);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <main>
      <Hero
        title="Find Your Perfect Stylist"
        description="Take our quick quiz to match with the stylist who best fits your hair type, style preferences, and needs. Your perfect hair journey starts with the right stylist!"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />

      {/* Quiz Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {!quizComplete ? (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm text-muted-foreground">
                    Question {currentQuestion + 1} of {questions.length}
                  </div>
                  <div className="text-sm font-medium">
                    {Math.round(progress)}% Complete
                  </div>
                </div>
                <Progress value={progress} className="h-2" />
                <CardTitle className="mt-6 text-2xl">
                  {questions[currentQuestion].question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={selectedOption || ""}
                  onValueChange={handleAnswer}
                  className="space-y-3"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={questions[currentQuestion].id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {questions[currentQuestion].options.map((option) => (
                        <div
                          key={option.id}
                          className="flex items-center space-x-2"
                        >
                          <RadioGroupItem value={option.id} id={option.id} />
                          <Label
                            htmlFor={option.id}
                            className="flex-1 py-3 px-4 rounded-md cursor-pointer transition-all hover:bg-muted"
                          >
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </RadioGroup>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="flex items-center"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!selectedOption}
                  className="flex items-center"
                >
                  {currentQuestion < questions.length - 1 ? (
                    <>
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      See My Matches
                      <CheckCircle className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">
                  Your Stylist Matches
                </h2>
                <p className="text-muted-foreground">
                  Based on your preferences, we&apos;ve found these stylists who
                  would be a great fit for you.
                </p>
              </div>

              <div className="space-y-6">
                {matchedStylists.map((stylist, index) => (
                  <Card
                    key={stylist.id}
                    className={`p-0 overflow-hidden ${
                      index === 0 ? "border-primary" : ""
                    }`}
                  >
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="relative md:w-1/3 h-48 md:h-auto">
                          <Image
                            src={
                              stylist.image ||
                              "/placeholder.svg?height=300&width=300"
                            }
                            alt={stylist.name}
                            fill
                            className="object-cover"
                          />
                          {index === 0 && (
                            <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                              Best Match
                            </div>
                          )}
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-xl font-bold">
                                {stylist.name}
                              </h3>
                              <p className="text-muted-foreground">
                                {stylist.role}
                              </p>
                            </div>
                            <div className="flex items-center">
                              <div className="text-lg font-bold mr-2">
                                {stylist.matchScore}%
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Match
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center mb-4">
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(stylist.rating)
                                      ? "fill-amber-500 text-amber-500"
                                      : "text-muted"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm ml-1">
                              {stylist.rating}
                            </span>
                          </div>

                          <p className="text-sm mb-4">{stylist.bio}</p>

                          <div className="mb-4">
                            <div className="text-sm font-medium mb-1">
                              Specialties:
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {stylist.specialties.map((specialty: string) => (
                                <span
                                  key={specialty}
                                  className="text-xs bg-muted px-2 py-1 rounded-full"
                                >
                                  {specialty}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button asChild>
                              <Link href={`/booking?stylist=${stylist.id}`}>
                                Book with {stylist.name.split(" ")[0]}
                              </Link>
                            </Button>
                            <Button variant="outline" asChild disabled>
                              <Link href={`/stylists/${stylist.id}`}>
                                View Profile
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center">
                <Button variant="outline" onClick={resetQuiz}>
                  Take the Quiz Again
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Benefits />
    </main>
  );
}
