"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Home,
  BookOpen,
  Code,
  Database,
  Network,
  Settings,
  Award,
  BarChart2,
  ChevronLeft,
  Search,
  Clock,
  Cpu,
  FileCode,
  Layers,
  Table,
  Target,
  Brain,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function PlacementPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const subjects = [
    {
      id: "dsa",
      name: "Data Structures & Algorithms",
      icon: <Code className="h-8 w-8 text-blue-400" />,
      progress: 65,
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: "oops",
      name: "Object Oriented Programming",
      icon: <FileCode className="h-8 w-8 text-green-400" />,
      progress: 80,
      color: "from-green-500 to-emerald-400",
    },
    {
      id: "os",
      name: "Operating Systems",
      icon: <Cpu className="h-8 w-8 text-red-400" />,
      progress: 45,
      color: "from-red-500 to-orange-400",
    },
    {
      id: "cn",
      name: "Computer Networks",
      icon: <Network className="h-8 w-8 text-purple-400" />,
      progress: 30,
      color: "from-purple-500 to-violet-400",
    },
    {
      id: "se",
      name: "Software Engineering",
      icon: <Layers className="h-8 w-8 text-yellow-400" />,
      progress: 20,
      color: "from-yellow-500 to-amber-400",
    },
    {
      id: "dbms",
      name: "Database Management",
      icon: <Database className="h-8 w-8 text-teal-400" />,
      progress: 55,
      color: "from-teal-500 to-cyan-400",
    },
    {
      id: "sql",
      name: "SQL",
      icon: <Table className="h-8 w-8 text-indigo-400" />,
      progress: 70,
      color: "from-indigo-500 to-blue-400",
    },
    {
      id: "aptitude",
      name: "Aptitude & Logical Reasoning",
      icon: <Target className="h-8 w-8 text-pink-400" />,
      progress: 40,
      color: "from-pink-500 to-rose-400",
    },
    {
      id: "ai",
      name: "Artificial Intelligence",
      icon: <Brain className="h-8 w-8 text-violet-400" />,
      progress: 15,
      color: "from-violet-500 to-purple-400",
    },
  ]

  const filteredSubjects = subjects.filter((subject) => subject.name.toLowerCase().includes(searchQuery.toLowerCase()))

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-16 bg-navy-800/50 backdrop-blur-sm border-r border-teal-500/20 items-center py-6 sticky top-0 h-screen">
        <Link
          href="/home"
          className="p-3 rounded-lg hover:bg-navy-700/50 text-gray-400 hover:text-teal-400 transition-colors mb-8"
        >
          <Home className="h-6 w-6" />
          <span className="sr-only">Dashboard</span>
        </Link>

        <nav className="flex flex-col items-center gap-4 flex-1">
          <SidebarIcon icon={<BookOpen className="h-6 w-6" />} label="Subjects" active />
          <SidebarIcon icon={<Award className="h-6 w-6" />} label="Quizzes" />
          <SidebarIcon icon={<Settings className="h-6 w-6" />} label="Badges" />
          <SidebarIcon icon={<BarChart2 className="h-6 w-6" />} label="Leaderboard" />
        </nav>

        <Link
          href="/home"
          className="p-3 rounded-lg hover:bg-navy-700/50 text-gray-400 hover:text-teal-400 transition-colors mt-auto"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Back</span>
        </Link>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <Link href="/home" className="inline-flex items-center text-sm text-gray-400 hover:text-teal-400 mb-2">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Home
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-white">Placement Mastery Modules</h1>
              <p className="text-gray-300 mt-2">Master these subjects to ace your technical interviews</p>
            </div>

            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search subjects..."
                className="pl-10 bg-navy-800/50 border-teal-500/20 text-white placeholder:text-gray-500 focus:border-teal-400 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Daily challenge card */}
          <div className="mb-8">
            <div className="relative overflow-hidden rounded-xl">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-purple-600 opacity-75 blur-sm"></div>
              <div className="relative bg-navy-800/70 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-navy-700/50">
                      <Clock className="h-8 w-8 text-teal-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Daily Quiz Challenge</h2>
                      <p className="text-gray-300">Test your knowledge with today's challenge</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Time Remaining</div>
                      <div className="text-xl font-bold text-white">03:45:22</div>
                    </div>
                    <Button className="bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-400 hover:to-purple-500 text-white">
                      Start Quiz
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subject grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredSubjects.map((subject) => (
              <motion.div key={subject.id} variants={itemVariants}>
                <SubjectCard subject={subject} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  )
}

function SidebarIcon({ icon, label, active = false }) {
  return (
    <div className="relative group">
      <div
        className={`p-3 rounded-lg ${
          active ? "bg-navy-700/70 text-teal-400" : "text-gray-400 hover:bg-navy-700/50 hover:text-teal-400"
        } transition-colors`}
      >
        {icon}
      </div>

      {/* Tooltip */}
      <div className="absolute left-full ml-2 px-2 py-1 bg-navy-800 rounded text-xs text-white whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {label}
      </div>
    </div>
  )
}

function SubjectCard({ subject }) {
  return (
    <motion.div className="h-full" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <div className="relative h-full overflow-hidden rounded-xl">
        {/* Glowing border */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${subject.color} opacity-75 blur-sm`}></div>

        {/* Card content */}
        <div className="relative h-full bg-navy-800/50 backdrop-blur-sm border border-white/10 p-6 rounded-xl flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-lg bg-navy-700/50">{subject.icon}</div>

            {/* Progress circle */}
            <div className="relative w-12 h-12">
              <svg className="w-12 h-12" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="3"
                />
                <path
                  d={`M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831`}
                  fill="none"
                  stroke="url(#gradient-${subject.id})"
                  strokeWidth="3"
                  strokeDasharray={`${subject.progress}, 100`}
                  className="rotate-90 origin-center"
                  transform="rotate(-90 18 18)"
                />
                <defs>
                  <linearGradient id={`gradient-${subject.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={subject.color.split(" ")[0].replace("from-", "")} />
                    <stop offset="100%" stopColor={subject.color.split(" ")[1].replace("to-", "")} />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white">
                {subject.progress}%
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">{subject.name}</h3>

          <div className="mt-auto pt-4">
            <Button className={`w-full bg-gradient-to-r ${subject.color} hover:opacity-90 text-white`}>
              {subject.progress > 0 ? "Resume" : "Start Learning"}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
