'use client';
import ContainerContent from "@/components/container-content";
import Section from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import H2 from "@/components/ui/h2";
import { Skill, SkillCategory } from "@/type";
import Image from "next/image";

export default function Home() {


  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Bootstrap" },
        { name: "Material-UI" },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js" },
        { name: "Express" },
        { name: "REST API" },
        { name: "GraphQL" },
        { name: "MongoDB" },
        { name: "PostgreSQL" },
        { name: "Firebase" },
      ],
    },
    {
      name: "Outils",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "GitLab" },
        { name: "VS Code" },
        { name: "Figma" },
        { name: "Adobe XD" },
        { name: "Photoshop" },
      ],
    },
    {
      name: "Réseaux",
      skills: [
        { name: "TCP/IP" },
        { name: "DNS" },
        { name: "HTTP" },
        { name: "HTTPS" },
        { name: "FTP" },
        { name: "SSH" },
        { name: "VPN" }
      ]
    }
  ];
  return (
    <main className="flex flex-col row-start-2 items-center sm:items-start">
      <section
        id="hero-section"
        className="w-full flex flex-col gap-4 items-center py-16 min-h-[30rem] h-[calc(100vh-4.5rem)] "
      >
        <ContainerContent>
          <div className="h-full w-full flex flex-col justify-center  gap-3  ">
            <p>Bonjour Je {"m'appel"}</p>
            <h2 className="text-5xl font-semibold">
              Sohaib
            </h2>
            <h1 className="text-4xl text-primary font-bold">
              {"Fullstack developpeur"}
            </h1>
            <p className="max-w-md">Je suis passioner  par...</p>
            <div className="flex gap-4">
              <Button >Obtenir mon CV</Button>
            </div>
          </div>
        </ContainerContent>
      </section>

      <Section id="about-section">
        <ContainerContent className="flex flex-col items-center gap-16">
          <H2>Qui suis-je ?</H2>
          <div className="flex flex-col gap-4 lg:gap-12 items-center p-8 lg:p-16 rounded-lg bg-white/10 max-w-[994px] md:flex-row">
            <div className="min-w-[200px] h-[200px] bg-black rounded-lg">
              <Image
                src="/photo.jpg"
                alt={"Sohaib"}
                width={200}
                height={400}
                style={{objectFit: "cover"}}
                className="rounded-lg w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold">
                Salut, je suis Sohaib
              </h3>
              <p>
                Je suis un développeur web passionné par la création d'expériences
                utilisateur agréables et intuitives. J'aime travailler sur des
                projets qui ont un impact positif sur la vie des gens.
              </p>
            </div>
          </div>
        </ContainerContent>
      </Section>
      

      <Section id="skill-section">
        <ContainerContent className="flex flex-col gap-16">
          <H2 className="">
            Mes compétences
          </H2>

          <p>
            Voici quelques-unes des technologies avec lesquelles je travaille
            actuellement. Je suis toujours prêt à apprendre de nouvelles choses
            et à {"m'adapter"} à de nouveaux environnements.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {skillCategories?.map((item: SkillCategory, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 flex-wrap 
                w-full sm:w-[calc(100%/2-2rem/2)]"
              >
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <div className="flex flex-wrap justify-start gap-1">
                  {item.skills.map((skill:Skill, index) => (
                    <Badge key={index} variant="outlinePrimary">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ContainerContent>
      </Section>

      

    </main>
  );
}
