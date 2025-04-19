"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import LoginForm from "./login-form"
import SignupForm from "./signup-form"
import FloatingMascot from "./floating-mascot"

type AuthModalProps = {
  isOpen: boolean
  onClose: () => void
  defaultTab?: "login" | "signup"
}

export default function AuthModal({ isOpen, onClose, defaultTab = "login" }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<"login" | "signup">(defaultTab)

  // Close modal with escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with subtle animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={onClose}
            style={{
              backgroundImage: "radial-gradient(circle at center, rgba(45, 212, 191, 0.05) 0%, transparent 70%)",
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 px-4 sm:px-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-2xl">
              {/* Glowing border effect with animation */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-teal-500 to-purple-600 opacity-75 blur-sm animate-pulse-glow"></div>

              {/* Modal content */}
              <div className="relative rounded-2xl bg-navy-900/90 backdrop-blur-xl border border-white/10 shadow-2xl">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-navy-800/50 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </button>

                {/* Modal header */}
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold text-white">
                    {activeTab === "login" ? "Welcome Back, Scholar" : "Join the GEMS League"}
                  </h2>
                  <p className="mt-2 text-gray-300">Your journey to leveling up begins here</p>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-teal-500/20">
                  <button
                    id="login-tab"
                    className={`flex-1 py-3 text-center font-medium transition-colors ${
                      activeTab === "login"
                        ? "border-b-2 border-teal-400 text-teal-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                    onClick={() => setActiveTab("login")}
                  >
                    Login
                  </button>
                  <button
                    id="signup-tab"
                    className={`flex-1 py-3 text-center font-medium transition-colors ${
                      activeTab === "signup"
                        ? "border-b-2 border-teal-400 text-teal-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                    onClick={() => setActiveTab("signup")}
                  >
                    Sign Up
                  </button>
                </div>

                {/* Form content */}
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    {activeTab === "login" ? (
                      <motion.div
                        key="login"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <LoginForm onClose={onClose} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="signup"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <SignupForm onClose={onClose} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Floating Mascot */}
            <FloatingMascot />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
