"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  BarChart2,
  BookOpen,
  ChevronRight,
  Github,
  Instagram,
  Linkedin,
  Play,
  Sparkles,
  Trophy,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import LeaderboardPreview from "@/components/leaderboard-preview"
import AuthModal from "@/components/auth-modal"

export default function Home() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authModalTab, setAuthModalTab] = useState<"login" | "signup">("login")

  const openLoginModal = () => {
    setAuthModalTab("login")
    setIsAuthModalOpen(true)
  }

  const openSignupModal = () => {
    setAuthModalTab("signup")
    setIsAuthModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} defaultTab={authModalTab} />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-navy-950/80 border-b border-teal-500/20">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-teal-400" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
              GEMS
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium text-white hover:text-teal-400 transition-colors">
              Home
            </Link>
            <Link href="#features" className="text-sm font-medium text-white hover:text-teal-400 transition-colors">
              Features
            </Link>
            <Link href="#leaderboard" className="text-sm font-medium text-white hover:text-teal-400 transition-colors">
              Leaderboard
            </Link>
            <Link href="#" className="text-sm font-medium text-white hover:text-teal-400 transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="hidden md:flex text-white hover:text-teal-400 hover:bg-navy-800/50"
              onClick={openLoginModal}
            >
              Login
            </Button>
            <Button
              className="bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-400 hover:to-purple-500 text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40"
              onClick={openSignupModal}
            >
              Sign Up
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/80 to-navy-950"></div>
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-teal-500/30 bg-navy-800/30 px-3 py-1 text-sm text-teal-400 backdrop-blur-md">
                  <Sparkles className="mr-1 h-3.5 w-3.5" />
                  <span>Learning reimagined for engineering students</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  Gamify Your Learning Journey with{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
                    GEMS
                  </span>
                </h1>
                <p className="text-xl text-gray-300">Earn points, badges, and ranks while mastering your subjects.</p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    className="bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-400 hover:to-purple-500 text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105"
                    onClick={openSignupModal}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-teal-500/50 text-white hover:bg-navy-800/50 hover:border-teal-400 transition-all duration-300"
                  >
                    Watch Demo
                    <Play className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-teal-500 to-purple-600 opacity-75 blur-xl"></div>
                <div className="relative rounded-3xl bg-navy-800/50 backdrop-blur-sm border border-white/10 p-6 shadow-2xl">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="GEMS Robot Mascot"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-navy-900/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">GEMS</span>
                ?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our platform combines education with gamification to make learning engaging and rewarding.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon={<Award className="h-10 w-10 text-teal-400" />}
                title="Earn Rewards"
                description="XP, badges, and quizzes with point systems to keep you motivated."
              />
              <FeatureCard
                icon={<BarChart2 className="h-10 w-10 text-purple-400" />}
                title="Track Progress"
                description="Personalized dashboards and progress bars to monitor your growth."
              />
              <FeatureCard
                icon={<Trophy className="h-10 w-10 text-teal-400" />}
                title="Compete with Peers"
                description="Leaderboards and challenges to foster healthy competition."
              />
              <FeatureCard
                icon={<BookOpen className="h-10 w-10 text-purple-400" />}
                title="Learn Smart"
                description="Adaptive courses & gamified quizzes tailored to your learning style."
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-navy-950">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Students Say</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Hear from engineering students who transformed their learning experience with GEMS.
              </p>
            </div>
            <TestimonialCarousel />
          </div>
        </section>

        {/* Leaderboard Preview Section */}
        <section id="leaderboard" className="py-20 bg-navy-900/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Top Performers</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">See who's leading the pack this week. Will you be next?</p>
            </div>
            <LeaderboardPreview />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-purple-600/10"></div>
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Start leveling up your learning today!</h2>
              <p className="text-xl text-gray-300">
                Join thousands of engineering students who are transforming their education journey.
              </p>
              <Button
                className="bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-400 hover:to-purple-500 text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105 text-lg px-8 py-6 h-auto"
                onClick={openSignupModal}
              >
                Create Your Account
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-navy-950 border-t border-teal-500/20 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-teal-400" />
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
                  GEMS
                </span>
              </div>
              <p className="text-gray-400 max-w-md">
                Gamified Education Management System for engineering students. Making learning fun and rewarding.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-medium mb-4">Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                      Leaderboard
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-teal-500/20 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} GEMS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-navy-800/50 border border-teal-500/20 backdrop-blur-sm hover:border-teal-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 group">
      <CardHeader>
        <div className="p-2 rounded-lg bg-navy-700/50 w-fit mb-2 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-300">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
