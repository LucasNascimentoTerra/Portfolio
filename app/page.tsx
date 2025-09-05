"use client"

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

const playStarSound = () => {
  const audio = new Audio("https://www.myinstants.com/media/sounds/super-mario-64-power-star-sound-effect.mp3")
  audio.volume = 0.5
  audio.play().catch((error) => {
    console.log("Audio playback failed:", error)
  })
}

export default function Home() {
  return (
    <div
      className="min-h-screen text-foreground relative"
      style={{
        backgroundImage: "url('/topographic-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* All content with relative positioning */}
      <div className="relative z-10">
        

        <div className="opacity-100 pt-0">
          {/* Header with name */}
          <header className="text-center py-8">
            <h1 className="text-6xl font-bold text-white">Lucas Terra</h1>
          </header>

          {/* Main content grid */}
          <main className="max-w-6xl mx-auto px-4 pb-8">
            <section id="photos" className="scroll-mt-20">
              {/* Photo grid and intro section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Photo grid - left side */}
                <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                  <img
                    src="/pacman-character-selection.jpg"
                    alt="Pac-Man character selection screen showing ghost characters"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <img
                    src="/zoo-gila-monster-cropped.jpg"
                    alt="At the zoo learning about Gila monsters"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <img
                    src="/coral-aquarium-cropped.jpg"
                    alt="Beautiful coral with vibrant green polyps in aquarium lighting"
                    className="w-full h-48 object-cover rounded-lg col-span-2"
                  />
                </div>

                {/* Hello section - right side */}
                <div className="bg-yellow-section text-black p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4 text-center text-red-400">Hello!</h2>
                  <p className="text-sm mb-6 text-black">
                    My name is Lucas and I am a new graduate in IT. Specializing in Software Development, my interests
                    primarily focus on DevOps, Network Infrastructure, and Embedded Systems. I enjoy working with any
                    computer I can get my hands on, especially the "weird stuff". 😂
                  </p>

                  <div className="space-y-3 flex flex-col items-center">
                    <button onClick={() => window.open("https://www.instagram.com/yourusername", "_blank")} className="bg-pink-500 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-pink-600 transition-colors">
                      <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      Instagram
                    </button>
                    <button onClick={() => window.open("https://github.com/LucasNascimentoTerra", "_blank")} className="bg-gray-700 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors">
                      <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </button>
                    <button onClick={() => window.open("https://linkedin.com/in/lucas-n-terra", "_blank")} className="bg-blue-500 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
                      <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </button>
                    <button onClick={() => window.location.href = "mailto:lucasnterra03@gmail.com"}        className="bg-white text-gray-900 py-2 px-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.724l9.615-6.903h.749c.904 0 1.636.732 1.636 1.636z" />
                      </svg>
                      Mail
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Quote section */}
            <div className="text-center mb-8 bg-gray-800 p-6 rounded-lg">
              <blockquote className="text-xl italic text-red-400">
                "We do these things not because they are easy, but because we thought they were going to be easy"
              </blockquote>
              <cite className="text-sm text-gray-300 mt-2 block">- Me, trying to design a good looking website </cite>
            </div>

            <section id="resume" className="scroll-mt-20">
              {/* Resume section */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4 text-white">Resume</h2>
                <a
                  href="/Lucas_Terra_Resume.2025.pdf"
                  download="Lucas_Terra_Resume.pdf"
                  className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                  >
                  Download Resume
                </a>
                <p className="text-sm text-gray-300 mt-4">
                  See below for an alternate (and shorter) version of my resume.
                </p>
              </div>
            </section>

            <section id="education" className="scroll-mt-20">
              {/* Bottom sections grid */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Left column - Education and Experience stacked - now spans 3 columns for more width */}
                <div className="lg:col-span-3 space-y-6 justify-stretch">
                  {/* Education */}
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-red-400">Education</h3>
                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-semibold text-white">Algonquin College (Sep. 2022 - Apr. 2024)</h4>
                        <p className="text-gray-300 ml-4">◦ Ontario College Diploma – Computer Programming</p>
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="bg-yellow-section text-black p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-red-400">Experience</h3>
                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-semibold">Software Developer (Apr. 2025 - Jul. 2025)</h4>
                        <p className="text-gray-800 ml-4 italic">◦ Building Tech - Ottawa, Canada</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Full Stack Developer Co-op (Jan. 2024 - Apr. 2024)</h4>
                        <p className="text-gray-800 ml-4 italic">
                          ◦ First Peoples Innovation Centre - Gatineau, Canada
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column - Skills full height - now spans 1 column (narrower) */}
                <div className="bg-blue-800 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Skills</h3>
                  <div className="space-y-2 text-sm">
                    <div>• Java</div>
                    <div>• Python</div>
                    <div>• SQL</div>
                    <div>• Javascript</div>
                    <div>• TCP/IP</div>
                    <div>• Object-Oriented Programming (OOP)</div>
                    <div>• REST API</div>
                    <div>• MongoDB</div>
                    <div>• Wireshark</div>
                    <div>• Powershell</div>
                    <div>• Bash</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="contact" className="scroll-mt-20">
              {/* Footer social icons */}
              <div className="flex justify-center space-x-4 mt-8 pt-8">
                <div onClick={() => window.open("https://www.instagram.com/yourusername", "_blank")}        className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div onClick={() => window.open("https://github.com/LucasNascimentoTerra", "_blank")}        className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div onClick={() => window.open("https://www.linkedin.com/in/lucas-n-terra", "_blank")}        className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.724l9.615-6.903h.749c.904 0 1.636.732 1.636 1.636z" />
                  </svg>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
