import ContainerContent from "@/components/container-content";
import H1 from "@/components/ui/h1";

import { ProjectCard } from "@/components/projectCard";
import Section from "@/components/section";
import { Project } from "@/type";
import { get } from "http";
import { getProjects } from "./projects";



export default async function Projets() {

 
  const projects: Project[] = await getProjects();

  return (
    <main>
      <Section>
        <H1>
        {"Projects"}
        </H1>
      </Section>
      <Section>
        <ContainerContent className="flex flex-col gap-16">
          <div className="flex flex-wrap justify-center gap-4">
            {projects?.map((item, index) => (
              <ProjectCard
                key={index}
                project={item}
              />

            ))}
          </div>
    

        </ContainerContent>
      </Section>
    </main>
  );
}
