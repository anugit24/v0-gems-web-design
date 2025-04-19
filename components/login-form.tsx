"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Lock, Loader2 } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

type LoginFormProps = {
  onClose: () => void
}

export default function LoginForm({ onClose }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Handle login logic here
    console.log({ email, password, rememberMe })

    // Redirect to home page
    window.location.href = "/home"
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="text-white">
            Password
          </Label>
          <button type="button" className="text-xs text-teal-400 hover:text-teal-300 transition-colors">
            Forgot Password?
          </button>
        </div>
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

      <div className="flex items-center space-x-2">
        <Checkbox
          id="remember"
          checked={rememberMe}
          onCheckedChange={(checked) => setRememberMe(checked as boolean)}
          className="border-teal-500/50 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
        />
        <Label htmlFor="remember" className="text-sm text-gray-300 font-normal">
          Remember me
        </Label>
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
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </Button>
      </motion.div>

      <div className="text-center text-sm text-gray-400">
        Don't have an account?{" "}
        <button
          type="button"
          className="text-teal-400 hover:text-teal-300 transition-colors"
          onClick={() => document.getElementById("signup-tab")?.click()}
        >
          Sign up
        </button>
      </div>
    </form>
  )
}
