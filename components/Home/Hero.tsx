import Link from "next/link"
import { Button } from "../ui/button"
import ROUTES from "@/constants/route"

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-background text-foreground px-4 md:px-8 overflow-hidden">
            {/* Dynamic Background Element */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-primary-dark rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-secondary-dark rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
            </div>

            <div className="relative z-10 w-full container grid lg:grid-cols-2 gap-12 lg:gap-24 items-center py-20">
                {/* Left Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                        Go From <br className="lg:hidden" />
                        <span className="text-primary">I Know This</span> to <br className="lg:hidden" />
                        <span className="text-accent">I Built This</span>
                    </h1>

                    <p className="mt-6 text-lg max-w-xl">
                        Stop consuming tutorials and start creating real-world projects that get you hired. Our platform transforms your knowledge into tangible skills.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button size="lg" className="px-8 py-3" asChild>
                            <Link href={ROUTES.COURSES}>
                                Get Started
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="px-8 py-3" asChild>
                            <Link href={ROUTES.PATHS}>
                                Explore Learning Path
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Right Visual Element (Mockup) */}
                <div className="flex flex-col lg:flex-row items-center justify-center relative">
                    <div className="relative w-full max-w-xl aspect-[16/9] p-2">
                        {/* Background Glow */}
                        <div className="absolute -inset-10 bg-gradient-to-tr from-primary/30 via-accent/20 to-transparent blur-3xl opacity-60 animate-pulse" />
                        {/* Code Editor Window */}
                        <div className="relative rounded-xl bg-[#1e1e1e] shadow-2xl overflow-hidden border border-border backdrop-blur-md font-mono text-sm leading-6">
                            {/* Editor Header */}
                            <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-border">
                                {/* traffic light buttons */}
                                <div className="flex space-x-2">
                                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                                </div>
                                <p className="text-xs text-gray-400">devacademy.js</p>
                                <div className="w-8"></div> {/* Spacer */}
                            </div>

                            {/* Code Area */}
                            <div className="flex">
                                {/* Line Numbers */}
                                <div className="bg-[#252526] text-gray-500 text-right pr-4 pl-2 select-none">
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <div key={i} className="h-6">{i + 1}</div>
                                    ))}
                                </div>

                                {/* Code */}
                                <div className="px-4 py-3 text-code-foreground">
                                    <span className="text-code-comment">{'//'} Learn by building, not just watching</span><br />
                                    <span className="text-code-keyword">import</span> <span className="text-code-class">DevAcademyCourse</span> <span className="text-code-keyword">from</span> <span className="text-code-string">&apos;./devacademy.js&apos;</span>;<br /><br />
                                    <span className="text-code-const">const</span> <span className="text-code-variable">course</span> = <span className="text-code-keyword">new</span> <span className="text-code-class">DevAcademyCourse</span>({`{`}<br />
                                    &nbsp;&nbsp;title: <span className="text-code-string">&apos;Full-Stack Bootcamp&apos;</span>,<br />
                                    &nbsp;&nbsp;projects: <span className="text-code-array">["Portfolio Website", "E-commerce Store", "Chat App", And many more...]</span>,<br />
                                    &nbsp;&nbsp;tools: <span className="text-code-array">["Next.js", "Tailwind", "MongoDB"]</span>,<br />
                                    {`}`});<br /><br />
                                    <span className="text-code-variable">course</span>.<span className="text-code-function">startLearning</span>();
                                </div>
                            </div>
                        </div>


                        {/* Floating Terminal Mockup */}
                        <div className="absolute -bottom-10 -right-10 w-64 rounded-lg bg-black/90 text-green-400 font-mono text-xs p-4 shadow-xl border border-border animate-float">
                            <p>$ npm run devacademy</p>
                            <p className="opacity-80">✔ Learn not just by watching but also by doing...</p>
                            <p className="opacity-80">✔ unlock new opportunities...</p>
                            <p className="text-green-300">✔ Let&apos;s Code Your Career 🚀</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero