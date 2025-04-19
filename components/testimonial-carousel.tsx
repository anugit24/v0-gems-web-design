"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Computer Science Student",
    avatar: "/placeholder.svg?height=100&width=100",
    quote: "Studying finally feels like a game I want to win! GEMS has transformed how I approach my coursework.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Electrical Engineering Student",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "GEMS helped me prepare for placement with fun quizzes and live leaderboards. I'm now at the top of my class!",
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "Mechanical Engineering Student",
    avatar: "/placeholder.svg?height=100&width=100",
    quote: "The gamification aspect makes even the most challenging subjects feel approachable and engaging.",
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="bg-navy-800/50 border border-teal-500/20 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="relative">
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-teal-500 to-purple-600 opacity-75 blur"></div>
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="relative w-20 h-20 rounded-full object-cover border-2 border-white/10"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <Quote className="h-8 w-8 text-teal-400/40 mb-2 mx-auto md:mx-0" />
                      <p className="text-white text-lg mb-4 italic">{testimonial.quote}</p>
                      <div>
                        <h4 className="text-white font-medium">{testimonial.name}</h4>
                        <p className="text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="rounded-full border-teal-500/30 text-white hover:bg-navy-800/50 hover:border-teal-400"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="rounded-full border-teal-500/30 text-white hover:bg-navy-800/50 hover:border-teal-400"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}
