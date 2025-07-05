import React from 'react';

interface Skill {
  category: string;
  items: string[];
}

export default function Skills() {
  const skills: Skill[] = [
    {
      category: 'Technical Skills',
      items: ['Kotlin (Android Studio)', 'HTML', 'CSS', 'JavaScript', 'Python', 'Firebase']
    },
    {
      category: 'Soft Skills',
      items: ['Time Management', 'Team Player', 'Fast Learner']
    },
  ];

  return (
    <section id="skills" className="py-16 px-4 md:px-8 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div key={groupIndex} className="space-y-4">
              <h3 className="text-xl font-semibold border-l-4 border-primary pl-3">{skillGroup.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold border-l-4 border-primary pl-3 mb-4">Education</h3>
          <div className="space-y-6">
            <div className="border-l border-text-secondary pl-4 ml-2 pb-6 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
              <div className="font-semibold">B.Sc. in Information Technology</div>
              <div className="text-text-secondary">K.P.B Hinduja College, Mumbai University, Mumbai</div>
              <div className="text-sm">2022 - 2025</div>
              <div className="text-sm">CGPI: 8.62</div>
            </div>
            
            <div className="border-l border-text-secondary pl-4 ml-2 pb-6 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
              <div className="font-semibold">HSC (12th Grade)</div>
              <div className="text-text-secondary">Akbar Peerbhoy College, Mumbai</div>
              <div className="text-sm">2021 - 2022</div>
              <div className="text-sm">Percentage: 75.83%</div>
            </div>
            
            <div className="border-l border-text-secondary pl-4 ml-2 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
              <div className="font-semibold">SSC (10th Grade)</div>
              <div className="text-text-secondary">Anjuman-I-Islam Allana English High School (C.S.T.), Mumbai</div>
              <div className="text-sm">2019 - 2020</div>
              <div className="text-sm">Percentage: 70.60%</div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold border-l-4 border-primary pl-3 mb-4">Hobbies</h3>
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-secondary/10 rounded-full">Developing Android Apps</div>
            <div className="px-4 py-2 bg-secondary/10 rounded-full">Website Development</div>
          </div>
        </div>
      </div>
    </section>
  );
}