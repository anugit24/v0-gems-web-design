"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Home, BookOpen, FileText, Search, ChevronLeft, Download, FileQuestion, BookMarked, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CurriculumPage() {
  const [semester, setSemester] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [contentType, setContentType] = useState("all")

  const subjects = [
    {
      id: "math3",
      name: "Mathematics III",
      semester: "3",
      hasNotes: true,
      hasPYQs: true,
      hasPDFs: true,
      progress: 75,
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: "coa",
      name: "Computer Organization & Architecture",
      semester: "3",
      hasNotes: true,
      hasPYQs: true,
      hasPDFs: true,
      progress: 60,
      color: "from-purple-500 to-violet-400",
    },
    {
      id: "dsa",
      name: "Data Structures & Algorithms",
      semester: "3",
      hasNotes: true,
      hasPYQs: true,
      hasPDFs: true,
      progress: 90,
      color: "from-green-500 to-emerald-400",
    },
    {
      id: "dbms",
      name: "Database Management Systems",
      semester: "4",
      hasNotes: true,
      hasPYQs: true,
      hasPDFs: false,
      progress: 40,
      color: "from-teal-500 to-cyan-400",
    },
    {
      id: "os",
      name: "Operating Systems",
      semester: "4",
      hasNotes: true,
      hasPYQs: false,
      hasPDFs: true,
      progress: 65,
      color: "from-red-500 to-orange-400",
    },
    {
      id: "cn",
      name: "Computer Networks",
      semester: "5",
      hasNotes: true,
      hasPYQs: true,
      hasPDFs: true,
      progress: 30,
      color: "from-indigo-500 to-blue-400",
    },
    {
      id: "se",
      name: "Software Engineering",
      semester: "5",
      hasNotes: false,
      hasPYQs: true,
      hasPDFs: true,
      progress: 20,
      color: "from-yellow-500 to-amber-400",
    },
    {
      id: "ai",
      name: "Artificial Intelligence",
      semester: "6",
      hasNotes: true,
      hasPYQs: false,
      hasPDFs: true,
      progress: 15,
      color: "from-pink-500 to-rose-400",
    },
  ]

  // Filter subjects based on semester and search query
  const filteredSubjects = subjects.filter((subject) => {
    const matchesSemester = semester === "all" || subject.semester === semester
    const matchesSearch = subject.name.toLowerCase().includes(searchQuery.toLowerCase())

    let matchesContentType = true
    if (contentType === "notes") matchesContentType = subject.hasNotes
    if (contentType === "pyqs") matchesContentType = subject.hasPYQs
    if (contentType === "pdfs") matchesContentType = subject.hasPDFs

    return matchesSemester && matchesSearch && matchesContentType
  })

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
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-navy-950/80 border-b border-teal-500/20">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/home" className="text-gray-400 hover:text-teal-400 transition-colors">
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Link>
            <h1 className="text-xl font-bold text-white">College Curriculum</h1>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:bg-navy-800/50">
              <Star className="h-4 w-4 mr-2 text-yellow-400" />
              Favorites
            </Button>
            <Link href="/home">
              <Button variant="ghost" className="text-white hover:bg-navy-800/50">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Filter bar */}
      <div className="sticky top-16 z-40 w-full backdrop-blur-md bg-navy-900/70 border-b border-teal-500/20 py-4">
        <div className="container flex flex-col sm:flex-row items-center gap-4">
          <div className="w-full sm:w-auto">
            <Select value={semester} onValueChange={setSemester}>
              <SelectTrigger className="w-full sm:w-[180px] bg-navy-800/50 border-teal-500/20 text-white focus:border-teal-400">
                <SelectValue placeholder="Select Semester" />
              </SelectTrigger>
              <SelectContent className="bg-navy-800 border-teal-500/20 text-white">
                <SelectItem value="all">All Semesters</SelectItem>
                <SelectItem value="1">Semester 1</SelectItem>
                <SelectItem value="2">Semester 2</SelectItem>
                <SelectItem value="3">Semester 3</SelectItem>
                <SelectItem value="4">Semester 4</SelectItem>
                <SelectItem value="5">Semester 5</SelectItem>
                <SelectItem value="6">Semester 6</SelectItem>
                <SelectItem value="7">Semester 7</SelectItem>
                <SelectItem value="8">Semester 8</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search subjects..."
              className="pl-10 bg-navy-800/50 border-teal-500/20 text-white placeholder:text-gray-500 focus:border-teal-400 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Tabs defaultValue="all" className="w-full sm:w-auto" onValueChange={setContentType}>
            <TabsList className="bg-navy-800/50 border border-teal-500/20">
              <TabsTrigger value="all" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                All
              </TabsTrigger>
              <TabsTrigger value="notes" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                Notes
              </TabsTrigger>
              <TabsTrigger value="pyqs" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                PYQs
              </TabsTrigger>
              <TabsTrigger value="pdfs" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                PDFs
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main content */}
      <main className="container py-8">
        {filteredSubjects.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">No subjects found</h2>
            <p className="text-gray-400">Try adjusting your filters or search query</p>
          </div>
        ) : (
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
        )}
      </main>
    </div>
  )
}

function SubjectCard({ subject }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div
        className="h-full cursor-pointer"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-full overflow-hidden rounded-xl">
          {/* Glowing border */}
          <div className={`absolute -inset-0.5 bg-gradient-to-r ${subject.color} opacity-75 blur-sm`}></div>

          {/* Card content */}
          <div className="relative h-full bg-navy-800/50 backdrop-blur-sm border border-white/10 p-6 rounded-xl flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">{subject.name}</h3>
              <div className="px-2 py-1 rounded-full bg-navy-700/50 text-xs font-medium text-gray-300">
                Sem {subject.semester}
              </div>
            </div>

            <div className="flex gap-3 mb-4">
              {subject.hasNotes && (
                <div className="p-2 rounded-md bg-navy-700/50 text-teal-400">
                  <BookOpen className="h-5 w-5" />
                </div>
              )}
              {subject.hasPYQs && (
                <div className="p-2 rounded-md bg-navy-700/50 text-purple-400">
                  <FileQuestion className="h-5 w-5" />
                </div>
              )}
              {subject.hasPDFs && (
                <div className="p-2 rounded-md bg-navy-700/50 text-blue-400">
                  <FileText className="h-5 w-5" />
                </div>
              )}
            </div>

            {/* Progress bar */}
            <div className="mt-auto">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-400">Progress</span>
                <span className="text-xs font-medium text-white">{subject.progress}%</span>
              </div>
              <div className="w-full bg-navy-700/50 rounded-full h-2">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${subject.color}`}
                  style={{ width: `${subject.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Subject Modal */}
      {isModalOpen && <SubjectModal subject={subject} onClose={() => setIsModalOpen(false)} />}
    </>
  )
}

function SubjectModal({ subject, onClose }) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed left-1/2 top-1/2 z-50 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 px-4 sm:px-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-2xl">
          {/* Glowing border */}
          <div className={`absolute -inset-0.5 bg-gradient-to-r ${subject.color} opacity-75 blur-sm`}></div>

          {/* Modal content */}
          <div className="relative rounded-2xl bg-navy-900/90 backdrop-blur-xl border border-white/10 shadow-2xl">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-navy-800/50 hover:text-white transition-colors"
            >
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
                className="h-5 w-5"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <span className="sr-only">Close</span>
            </button>

            {/* Modal header */}
            <div className="p-6 border-b border-teal-500/20">
              <div className="flex items-center gap-2">
                <div className="px-2 py-1 rounded-full bg-navy-700/50 text-xs font-medium text-gray-300">
                  Semester {subject.semester}
                </div>
                <div className="text-xs text-gray-400">Progress: {subject.progress}%</div>
              </div>
              <h2 className="text-2xl font-bold text-white mt-2">{subject.name}</h2>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="notes" className="p-6">
              <TabsList className="bg-navy-800/50 border border-teal-500/20 mb-6">
                <TabsTrigger value="notes" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                  Notes
                </TabsTrigger>
                <TabsTrigger value="pyqs" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                  Past Question Papers
                </TabsTrigger>
                <TabsTrigger value="pdfs" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                  Reference PDFs
                </TabsTrigger>
              </TabsList>

              <TabsContent value="notes" className="space-y-4">
                {subject.hasNotes ? (
                  <>
                    <div className="relative overflow-hidden rounded-lg border border-teal-500/20 bg-navy-800/50 p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <BookOpen className="h-5 w-5 text-teal-400" />
                          <div>
                            <h3 className="font-medium text-white">Chapter 1: Introduction</h3>
                            <p className="text-sm text-gray-400">Last updated: 2 weeks ago</p>
                          </div>
                        </div>
                        <Button variant="outline" className="border-teal-500/30 text-white hover:bg-navy-700/50">
                          <BookMarked className="h-4 w-4 mr-2" />
                          View Notes
                        </Button>
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-lg border border-teal-500/20 bg-navy-800/50 p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <BookOpen className="h-5 w-5 text-teal-400" />
                          <div>
                            <h3 className="font-medium text-white">Chapter 2: Core Concepts</h3>
                            <p className="text-sm text-gray-400">Last updated: 1 month ago</p>
                          </div>
                        </div>
                        <Button variant="outline" className="border-teal-500/30 text-white hover:bg-navy-700/50">
                          <BookMarked className="h-4 w-4 mr-2" />
                          View Notes
                        </Button>
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-lg border border-teal-500/20 bg-navy-800/50 p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <BookOpen className="h-5 w-5 text-teal-400" />
                          <div>
                            <h3 className="font-medium text-white">Chapter 3: Advanced Topics</h3>
                            <p className="text-sm text-gray-400">Last updated: 2 months ago</p>
                          </div>
                        </div>
                        <Button variant="outline" className="border-teal-500/30 text-white hover:bg-navy-700/50">
                          <BookMarked className="h-4 w-4 mr-2" />
                          View Notes
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <BookOpen className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">No notes available</h3>
                    <p className="text-gray-400">Notes for this subject will be added soon</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="pyqs" className="space-y-4">
                {subject.hasPYQs ? (
                  <>
                    <div className="relative overflow-hidden rounded-lg border border-teal-500/20 bg-navy-800/50 p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <FileQuestion className="h-5 w-5 text-purple-400" />
                          <div>
                            <h3 className="font-medium text-white">2023 End Semester Exam</h3>
                            <p className="text-sm text-gray-400">PDF • 2.4 MB</p>
                          </div>
                        </div>
                        <Button variant="outline" className="border-purple-500/30 text-white hover:bg-navy-700/50">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-lg border border-teal-500/20 bg-navy-800/50 p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <FileQuestion className="h-5 w-5 text-purple-400" />
                          <div>
                            <h3 className="font-medium text-white">2022 End Semester Exam</h3>
                            <p className="text-sm text-gray-400">PDF • 1.8 MB</p>
                          </div>
                        </div>
                        <Button variant="outline" className="border-purple-500/30 text-white hover:bg-navy-700/50">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-lg border border-teal-500/20 bg-navy-800/50 p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <FileQuestion className="h-5 w-5 text-purple-400" />
                          <div>
                            <h3 className="font-medium text-white">2022 Mid Semester Exam</h3>
                            <p className="text-sm text-gray-400">PDF • 1.2 MB</p>
                          </div>
                        </div>
                        <Button variant="outline" className="border-purple-500/30 text-white hover:bg-navy-700/50">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <FileQuestion className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">No question papers available</h3>
                    <p className="text-gray-400">Past question papers will be added soon</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="pdfs" className="space-y-4">
                {subject.hasPDFs ? (
                  <>
                    <div className="relative overflow-hidden rounded-lg border border-teal-500/20 bg-navy-800/50 p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-blue-400" />
                          <div>
                            <h3 className="font-medium text-white">Complete Reference Guide</h3>
                            <p className="text-sm text-gray-400">PDF • 8.7 MB</p>
                          </div>
                        </div>
                        <Button variant="outline" className="border-blue-500/30 text-white hover:bg-navy-700/50">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-lg border border-teal-500/20 bg-navy-800/50 p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-blue-400" />
                          <div>
                            <h3 className="font-medium text-white">Lecture Slides</h3>
                            <p className="text-sm text-gray-400">PDF • 5.2 MB</p>
                          </div>
                        </div>
                        <Button variant="outline" className="border-blue-500/30 text-white hover:bg-navy-700/50">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-lg border border-teal-500/20 bg-navy-800/50 p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-blue-400" />
                          <div>
                            <h3 className="font-medium text-white">Practice Problems</h3>
                            <p className="text-sm text-gray-400">PDF • 3.1 MB</p>
                          </div>
                        </div>
                        <Button variant="outline" className="border-blue-500/30 text-white hover:bg-navy-700/50">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <FileText className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">No PDFs available</h3>
                    <p className="text-gray-400">Reference materials will be added soon</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </motion.div>
    </>
  )
}
