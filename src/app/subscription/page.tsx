'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    console.log('Email submitted:', email)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#5CDB95] to-[#82E9C4] flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="space-y-24">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A]">
              Contella
            </h1>
            <h2 className="text-xl sm:text-2xl text-[#1A1A1A]/90">
              The AI Contract Reviewer
            </h2>
          </div>
          
          <div className="space-y-8">
            <p className="text-xl sm:text-2xl text-center text-[#1A1A1A]/80">
              Please enter your email address to start
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto w-full">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 h-12 text-lg bg-white border-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit"
                  className="h-12 px-8 text-lg font-medium bg-black text-white hover:bg-black/90"
                >
                  Try
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}