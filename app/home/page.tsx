"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LogOut, User, Sparkles, BookOpen, Target, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import FloatingParticles from "@/components/floating-particles"

export default function HomePage() {
  const [username, setUsername] = useState("Scholar")

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 flex flex-col">
      {/* Floating particles background */}
      <FloatingParticles />

      {/* Header with profile and logout */}
      <header className="w-full backdrop-blur-md bg-navy-950/50 border-b border-teal-500/20 py-4 px-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-teal-400" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
            GEMS
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-navy-800/50">
            <User className="h-4 w-4 text-teal-400" />
            <span>Profile</span>
          </Button>

          <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-navy-800/50">
            <LogOut className="h-4 w-4 text-purple-400" />
            <span>Logout</span>
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 relative z-10">
        <motion.div
          className="max-w-5xl w-full mx-auto text-center space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Welcome heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Welcome,{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
                {username}
              </span>
              !
            </h1>
            <p className="text-xl text-gray-300">Choose Your Path to Greatness</p>
          </motion.div>

          {/* Path selection cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Placement Track Card */}
            <PathCard
              icon={<Target className="h-10 w-10 text-teal-400" />}
              title="Placement Track"
              description="DSA, OOPS, OS, CN, SE, DBMS, SQL, Aptitude – Gear up for the real world!"
              href="/placement"
              gradientFrom="from-teal-500"
              gradientTo="to-blue-600"
            />

            {/* College Curriculum Card */}
            <PathCard
              icon={<BookOpen className="h-10 w-10 text-purple-400" />}
              title="College Curriculum"
              description="Access semester-wise notes, PDFs, and past question papers."
              href="/curriculum"
              gradientFrom="from-purple-500"
              gradientTo="to-pink-600"
            />
          </motion.div>

          {/* Daily challenge card */}
          <motion.div variants={itemVariants}>
            <div className="max-w-md mx-auto">
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 opacity-75 blur-sm animate-pulse"></div>
                <div className="relative bg-navy-800/70 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-white">Daily Challenge</h3>
                    <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full">+50 XP</span>
                  </div>
                  <p className="mt-2 text-gray-300 text-sm">
                    Complete today's algorithm challenge and climb the leaderboard!
                  </p>
                  <Button className="mt-4 w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-white">
                    Start Challenge
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}

interface PathCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  gradientFrom: string
  gradientTo: string
}

function PathCard({ icon, title, description, href, gradientFrom, gradientTo }: PathCardProps) {
  return (
    <Link href={href} className="block">
      <motion.div
        className="h-full"
        whileHover={{ scale: 1.03, y: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="relative h-full overflow-hidden rounded-2xl">
          {/* Glowing border */}
          <div
            className={`absolute -inset-0.5 bg-gradient-to-r ${gradientFrom} ${gradientTo} opacity-75 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-300`}
          ></div>

          {/* Card content */}
          <div className="relative h-full bg-navy-800/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex flex-col">
            <div className="p-3 rounded-lg bg-navy-700/50 w-fit mb-4">{icon}</div>

            <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
            <p className="text-gray-300 mb-6 flex-grow">{description}</p>

            <div className="mt-auto">
              <Button className={`w-full bg-gradient-to-r ${gradientFrom} ${gradientTo} hover:opacity-90 text-white`}>
                Enter
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
