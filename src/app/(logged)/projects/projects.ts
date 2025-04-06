
const projects = [
    {
        id: "1",
        name: "Projet 1",
        overview: "Description du projet 1",
        excerpt: "Extrait du projet 1",
        image: "/images/placeholder.png",
        responsibilities: ["Responsabilité 1", "Responsabilité 2"],
        highlights: ["Point fort 1", "Point fort 2"],
        link: {
            href: "https://www.google.com",
            name: "Voir le projet"
        },
        skills: [
            { name: "HTML" },
            { name: "CSS" },
            { name: "JavaScript" },
            { name: "React" },
            { name: "Next.js" },
            { name: "Tailwind CSS" }
        ]
    },
    {
        id: "1",
        name: "Projet 2",
        overview: "Description du projet 1",
        excerpt: "Extrait du projet 1",
        image: "/images/placeholder.png",
        responsibilities: ["Responsabilité 1", "Responsabilité 2"],
        highlights: ["Point fort 1", "Point fort 2"],
        link: {
            href: "https://www.google.com",
            name: "Voir le projet"
        },
        skills: [
            { name: "HTML" },
            { name: "CSS" },
            { name: "JavaScript" },
            { name: "React" },
            { name: "Next.js" },
            { name: "Tailwind CSS" }
        ]
    }
];
const getProjects = async () => {
   
    return projects;
}

const getProject = async (id: string) => {
    return projects.find(project => project.id === id);
}

export { getProjects, getProject };