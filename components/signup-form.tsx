"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Lock, User, Loader2 } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type SignupFormProps = {
  onClose: () => void
}

export default function SignupForm({ onClose }: SignupFormProps) {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [role, setRole] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Handle signup logic here
    console.log({ fullName, email, password, confirmPassword, role })

    // Redirect to home page
    window.location.href = "/home"
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-white">
          Full Name
        </Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            id="fullName"
            type="text"
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="pl-10 bg-navy-800/50 border-teal-500/20 text-white placeholder:text-gray-500 focus:border-teal-400"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">
          Email
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="pl-10 bg-navy-800/50 border-teal-500/20 text-white placeholder:text-gray-500 focus:border-teal-400"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-white">
          Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="pl-10 bg-navy-800/50 border-teal-500/20 text-white placeholder:text-gray-500 focus:border-teal-400"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-white">
          Confirm Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            id="confirmPassword"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="pl-10 bg-navy-800/50 border-teal-500/20 text-white placeholder:text-gray-500 focus:border-teal-400"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="role" className="text-white">
          Role
        </Label>
        <Select value={role} onValueChange={setRole} required>
          <SelectTrigger id="role" className="bg-navy-800/50 border-teal-500/20 text-white focus:border-teal-400">
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent className="bg-navy-800 border-teal-500/20 text-white">
            <SelectItem value="student">Student</SelectItem>
            <SelectItem value="instructor">Instructor</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <motion.div whileHover={!isLoading ? { scale: 1.02 } : {}} whileTap={!isLoading ? { scale: 0.98 } : {}}>
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-400 hover:to-purple-500 text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 group"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating Account...
            </>
          ) : (
            "Create Account"
          )}
        </Button>
      </motion.div>

      <div className="text-center text-sm text-gray-400">
        Already have an account?{" "}
        <button
          type="button"
          className="text-teal-400 hover:text-teal-300 transition-colors"
          onClick={() => document.getElementById("login-tab")?.click()}
        >
          Login
        </button>
      </div>
    </form>
  )
}
