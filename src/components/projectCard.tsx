'use client';

import { Project } from "@/type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

const summaryLength = 60;

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
    project: Project;
}
export function ProjectCard({ project, className, ...props }: ProjectCardProps) {
    const router = useRouter();
    
    const handleClick = () => {
        router.push(`/projects/${project.id}`);
    };
    const summary = useMemo(() => {
      const excerpt = project.excerpt || ""
      const excerptLength = excerpt.length;
      return excerptLength > summaryLength ? excerpt.slice(0, summaryLength) + "..." : excerpt;
    }, [project.excerpt]);

    return (
        <div
                className={`
                w-full md:w-[calc(100%/3-2rem/3)]
                relative flex flex-col gap-4
                rounded-sm border-2 border-white/10 ${className}`}
                onClick={handleClick}
                {...props}
              >
                <Image
                  src={"/photo.jpg"}
                  alt={project.name}
                  style={{ objectFit: "cover" }}
                  fill={true}
                  className="rounded-sm bg-blend-darken"
                />
                <div className="z-10 rounded-sm p-4 content-end  bg-gradient-to-t from-secondary/95 from-30% to-secondary/40 h-48 transition-all ease-in-out duration-300 hover:bg-secondary/70  hover:content-center hover:text-center">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="">{summary}</p>
                </div>
              </div>
    );
}
