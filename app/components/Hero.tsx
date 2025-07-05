import Image from 'next/image';

export default function Hero() {
  return (
    <section id="about" className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-8 gap-8">
      <div className="flex-1 space-y-6 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hanzala Khan
        </h1>
        <h2 className="text-xl md:text-2xl text-secondary">
          Fresher — Software / Android App Developer
        </h2>
        <p className="text-lg text-text-secondary">
          Motivated and enthusiastic fresher with a Bachelor&apos;s degree in Information Technology. Passionate 
          about Android app development and full-stack technologies. Looking to begin a career as a Software 
          or Android Developer, with a strong foundation in Kotlin, Firebase, and web development. Known 
          for quick learning, time management, and collaborative work ethic.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-primary text-white rounded-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            Contact Me
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a 
            href="#projects" 
            className="px-6 py-3 border border-secondary text-text-primary rounded-md flex items-center justify-center hover:bg-secondary/10 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        {/* Profile image */}
        <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden">
          <Image 
            src="/hanzala-profile.jpg" 
            alt="Hanzala Khan" 
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}