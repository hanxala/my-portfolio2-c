import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Exam Elite - Student Competition App",
      description: "Developed an Android application using Kotlin and Firebase that allows students to participate in quizzes and coding competitions. Features include authentication, competition lists, and real-time leaderboard functionality.",
      image: "/project-placeholder.svg",
      link: "#"
    },
    {
      title: "QuickCart - E-commerce Website",
      description: "A modern e-commerce platform featuring product listings, featured products section, and newsletter subscription. Built with responsive design principles for optimal viewing on all devices.",
      image: "/project-placeholder.svg",
      link: "http://quick-cart-six-smoky.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Recent Work</h2>
        <p className="text-text-secondary mb-12 max-w-3xl">
          Solving user & business problems since last 15+ years.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-secondary/20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-secondary/20 relative">
                {project.image && (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                )}
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-text-secondary">{project.description}</p>
                {project.link && (
                  <a 
                    href={project.link} 
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    Know more
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-text-secondary flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-text-secondary flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}