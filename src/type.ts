export type ImageInfo = {
    src: string;
    alt: string;
}

type ButtonContent ={
    type: string;
    label: string;
};
export type Project = {
    id: string;
    name: string;
    image: string;
    overview: string;
    excerpt?: string;
    responsibilities: string[];
    highlights: string[];
    visuals?: ImageInfo[];
    isSummarized?: boolean;
    skills?: Skill[];
    link?: NavLinks;
    };

export type Service = {
    id: string;
    name: string;
    description: string;
};

export type HeroSection = {
    sectionId: string;
    intro: string;
    title: string;
    subTitle: string;
    description: string;
    cta: ButtonContent;
};

export type ServiceSection = {
    sectionId: string;
    title: string;
    services: Service[];
};

export type SkillSection = {
    sectionId: string;
    title: string;
    intro: string;
};

export type ProjectSection = {
    sectionId: string;
    title: string;
    moreProjects: ButtonContent;
};

export type AboutSection = {
    sectionId:string;
    title: string;
    subTitle: string;
    description: string;
    image: ImageInfo;
}

export type CTASection = {
    sectionId: string;
    title: string;
    subTitle: string;
    cta: ButtonContent;

}

export type HomePageContent = {
    heroSection: HeroSection;
    serviceSection: ServiceSection;
    skillSection: SkillSection;
    projectSection: ProjectSection;
    aboutSection: AboutSection;
    ctaSection: CTASection;

};

export type Skill = {
    id?: string;
    name: string;
    category?: string;
};

export type SkillCategory = {
    id?: string;
    priority?: number;
    name: string;
    skills: Skill[];
};

export type HeaderContent = {
    logoSrc?: string;
    menuItems: {
        name: string;
        href: string;
    }[];
};

export type NavLinks = {
    name: string;
    href: string;
};


export interface Page<T> {
    items: T[];
    page: number;
    totalPages: number;
    pageSize: number;
}

