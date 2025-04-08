
const projects = [
    {
        id: "1",
        name: "Perle de Luxe",
        overview: "Création d'un site web vitrine pour la marque \"Perle de Luxe\", une boutique spécialisée dans la vente de bijoux haut de gamme. Le projet se concentre sur une présentation élégante et fonctionnelle des produits, en utilisant HTML et CSS pour une interface épurée et professionnelle.",
        excerpt: "Création d'un site web vitrine",
        image: "/images/placeholder.png",
        responsibilities: [
            "Conception de la structure du site web en HTML.",
            "Mise en forme et stylisation avec CSS.",
            "Développement de pages principales (accueil, produits, contact).",
            "Adaptation du design pour une visualisation optimale sur différents appareils (responsive design).",
            "Test et validation de l'affichage et de la navigation sur divers navigateurs."
        ],
        highlights: [
            "Mise en ligne d'un site web visuellement attractif et professionnel pour Perle de Luxe.",
            "Amélioration de la visibilité de la marque avec une interface utilisateur simple et moderne.",
            "Site web responsive, accessible sur mobile et desktop."
        ],
        
        skills: [
            { name: "HTML" },
            { name: "CSS" },
            { name: "Responsive" }
        ]
    },
    {
        id: "2",
        name: "Gestion de Bibliothèque",
        overview: "Développement d'une application de gestion de bibliothèque permettant aux utilisateurs de gérer les livres, les emprunts et les retours. Le projet utilise C# et le framework .NET pour offrir une solution robuste et performante pour gérer les ressources d'une bibliothèque.",
        excerpt: "une solution robuste et performante",
        image: "/images/placeholder.png",
        responsibilities: [
            "Conception de l'interface utilisateur avec Windows Forms en utilisant C#.",
            "Développement des fonctionnalités pour l'ajout, la suppression et la modification de livres dans la base de données.",
            "Implémentation de la gestion des emprunts et des retours de livres, avec le suivi des dates et des utilisateurs.",
            "Création d'une base de données SQLite pour stocker les informations relatives aux livres, emprunts, et utilisateurs.",
            "Mise en place de validations de données pour garantir l'intégrité des informations saisies.",
            "Développement de rapports et de statistiques pour les livres disponibles et les emprunts en cours."
        ],
        highlights: [
            "Création d'une application complète de gestion de bibliothèque, avec une interface intuitive et fonctionnelle.",
            "Amélioration de l'efficacité du suivi des livres et des emprunts, réduisant les erreurs humaines.",
            "Déploiement d'une solution autonome, sans dépendance à une connexion réseau constante, grâce à l'utilisation de SQLite."
        ],
        skills: [
            { name: "C#" },
            { name: ".NET Framework" },
            { name: "Windows Forms" },
            { name: "SQLite" }
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