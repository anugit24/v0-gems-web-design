"use client"

import { Crown, Medal, Star, Trophy } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const topUsers = [
  {
    id: 1,
    name: "Sophia Lee",
    avatar: "/placeholder.svg?height=100&width=100",
    points: 12850,
    badge: "Genius",
    rank: 1,
  },
  {
    id: 2,
    name: "Ethan Wright",
    avatar: "/placeholder.svg?height=100&width=100",
    points: 10720,
    badge: "Master",
    rank: 2,
  },
  {
    id: 3,
    name: "Olivia Chen",
    avatar: "/placeholder.svg?height=100&width=100",
    points: 9540,
    badge: "Expert",
    rank: 3,
  },
]

export default function LeaderboardPreview() {
  return (
    <div className="max-w-3xl mx-auto">
      <Card className="relative bg-navy-800/50 border border-teal-500/20 backdrop-blur-sm overflow-hidden animate-pulse-glow">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>

        <CardHeader className="relative z-10 border-b border-teal-500/20">
          <CardTitle className="text-white flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-400" />
            Top Performers This Week
          </CardTitle>
        </CardHeader>

        <CardContent className="relative z-10 p-6">
          <div className="space-y-6">
            {topUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center gap-4 p-4 rounded-lg bg-navy-900/50 border border-white/5 hover:border-teal-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-8 h-8">
                  {user.rank === 1 ? (
                    <Crown className="h-6 w-6 text-yellow-400 animate-float" />
                  ) : user.rank === 2 ? (
                    <Medal className="h-6 w-6 text-gray-400 animate-float" />
                  ) : (
                    <Medal className="h-6 w-6 text-amber-700 animate-float" />
                  )}
                </div>

                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-teal-500 to-purple-600 opacity-0 group-hover:opacity-75 blur transition-opacity duration-300"></div>
                  <img
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.name}
                    className="relative w-12 h-12 rounded-full object-cover border-2 border-white/10"
                  />
                </div>

                <div className="flex-1">
                  <h4 className="text-white font-medium">{user.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">{user.badge}</span>
                    <div className="flex">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
                    {user.points.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-400">points</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button className="text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors">
              View Full Leaderboard →
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
