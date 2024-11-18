'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function Component() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-400 to-emerald-50">
            <header className="px-4 lg:px-6 h-16 flex items-center text-gray-800">
                <Link className="flex items-center justify-center" href="#">
                    <span className="font-bold text-2xl">Contella</span>
                    <span className="sr-only">Contella - AI Contract Management Platform</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
                        Features
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#call-to-action">
                        Contact
                    </Link>
                </nav>
            </header>
            <main className="flex-1 text-gray-800">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container mx-auto px-4 md:px-6" id="features">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                                    Transform Contract Management with AI
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                                    Streamline your contract lifecycle with intelligent drafting, automated review, and seamless collaboration.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Button className="bg-black text-white hover:bg-gray-800" size="lg">
                                    <Link href="/subscription">Join the Waiting List</Link>
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        {/* <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-gray-900">Features</h2> */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="overflow-hidden">
                                <div className="aspect-video relative">
                                    <Image
                                        src="/assets/ai_powered_drafting.png"
                                        alt="AI-Powered Contract Drafting"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-2">AI-Powered Drafting</h3>
                                    <p className="text-gray-600">Generate and edit contract drafts intelligently for various use cases using our advanced Generative AI drafting tools.</p>
                                </CardContent>
                            </Card>
                            <Card className="overflow-hidden">
                                <div className="aspect-video relative">
                                    <Image
                                        src="/assets/automated_review.png"
                                        alt="Automated Contract Review"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-2">Automated Review</h3>
                                    <p className="text-gray-600">Review contracts faster and spot risky clauses with a higher accuracy with AI-assisted analysis and risk assessment.</p>
                                </CardContent>
                            </Card>
                            <Card className="overflow-hidden">
                                <div className="aspect-video relative">
                                    <Image
                                        src="/assets/secure_collaboration.png"
                                        alt="Secure Collaboration"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-2">Centralized Repository</h3>
                                    <p className="text-gray-600">Organize all your contracts in one secure location. Effortlessly search, retrieve, and monitor key contract obligations to ensure compliance and avoid missed deadlines.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-white/20 backdrop-blur-sm px-3 py-1 text-sm">
                                    Why Choose Contella?
                                </div>
                                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                                    Experience the future of contract management
                                </h2>
                                <Link
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                                    href="/subscription"
                                >
                                    Learn More
                                </Link>
                            </div>
                            <div className="flex flex-col items-start space-y-4">
                                <Sparkles className="h-12 w-12 text-black" />
                                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl/relaxed">
                                    Our platform combines cutting-edge AI technology with intuitive design to revolutionize how legal teams
                                    handle contracts. From drafting to signing, we make every step smoother and more efficient.
                                </p>
                                {/* <Button variant="outline">Contact Sales</Button> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white" id="call-to-action">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to get started?</h2>
                                <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Join leading companies using Contella to transform their contract management process.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Button className="bg-white text-black hover:bg-gray-200" size="lg">
                                    <Link href="/subscription">Get in Touch</Link>
                                </Button>
                                {/* <Button variant="outline" size="lg">
                  Schedule Demo
                </Button> */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white text-gray-700">
        <p className="text-xs text-gray-700">© 2024 Contella. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer> */}
        </div>
    )
}