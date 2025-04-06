
import ContainerContent from "@/components/container-content";
import H1 from "@/components/ui/h1";
import H2 from "@/components/ui/h2";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getProject } from "../projects";

interface ProjectParams {
  id: string;
}



async function ProjectPage({ params }: { params: ProjectParams }) {
  const project = await getProject(params.id);
  console.dir(project);
  return (
    <main>
      <Section>
        <ContainerContent>
          <H1>{project?.name}</H1>
        </ContainerContent>
      </Section>
      <Section>
        <ContainerContent className="gap-8">
          <H2>Overview</H2>
          <div>
            <p>
            {project?.overview}
            </p>
          </div>
        </ContainerContent>
      </Section>
      <Section>
        <ContainerContent className="gap-8">
          <H2 className="text-start">Role & Responsibilities</H2>
          <ul className="flex flex-col ps-4 gap-4 list-disc marker:text-primary">
            
                {
                  project?.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))
                }
          </ul>
        </ContainerContent>
      </Section>
      <Section>
        <ContainerContent className="gap-8">
          <H2 className="text-start">Project Highlights</H2>
          <ul className="flex flex-col ps-4 gap-4 list-disc marker:text-primary">
            
                {
                  project?.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))
                }
          </ul>
          <h3 className="font-bold text-2xl">
            Technologies
          </h3>
          <ul className="flex gap-4 flex-wrap">
            
                {
                  project?.skills?.map((skill, index) => (
                    <li key={index} className="text-primary border-2 rounded-xl border-primary p-2">{skill.name}</li>
                  ))
                }
          </ul>
        </ContainerContent>
      </Section>
      {
        project?.link
        &&
        <Section>
          <ContainerContent className="items-center gap-8">
            <H2>More About</H2>
            {
              <Link href={project.link.href}>
                <Button>
                  {project.link.name}
                </Button>
            </Link>
            }
          </ContainerContent>
        </Section>
      }
    </main>
  );
}

export default ProjectPage;

