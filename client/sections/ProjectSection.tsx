import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import terminalPortfolio from "public/projects/terminal-portfolio.webp";
import haruFashion from "public/projects/haru-fashion.webp";
import haruApi from "public/projects/haru-api.webp";
import astroPaper from "public/designStudio.png";
import crackWatch from "public/crackwatch.jpeg"
import nextBookstore from "public/projects/next-bookstore.webp";
import shadcnAdmin from "public/projects/shadcn-admin.webp";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/devendra-kumar-dhayal/"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Design Studio",
    type: "End to End",
    image: (
      <Image
        src={astroPaper}
        sizes="100vw"
        fill
        alt="AstroPaper"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Web-based editor to model the individual data flows between applications. Team of applications collaborating to make a business function smoothly.",
    tags: ["React", "TypeScript", "NodeJs", "TailwindCSS", "MongoDB","ZOD"],
    liveUrl: "",
    codeUrl: "https://github.com/Devendra-Kumar-Dhayal/designStudio",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://github.com/Devendra-Kumar-Dhayal/designStudio",
  },
  {
    title: "Social Media Application",
    type: "End to End",
    image: (
      <Image
        src={crackWatch}
        sizes="100vw"
        fill
        alt="AstroPaper"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Platform to discuss Games Information, strategies, and Statuses.",
    tags: ["Html", "JavaScript", "Django", "TailwindCSS", "PostgreSQL"],
    liveUrl: "",
    codeUrl: "https://github.com/Devendra-Kumar-Dhayal/homeMainBranch",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://github.com/Devendra-Kumar-Dhayal/homeMainBranch",
  },
  
  
  
];

export default ProjectSection;
