export type Language = "en" | "fr";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      tag: "- Independent Developer & Designer",
      title: "Design that speaks.",
      subtitle: "Code that performs.",
      description: "Minimal interfaces, sharp execution. I help teams ship products that feel inevitable.",
      cta: "Start a project",
      services: "View services",
    },
    about: {
      tag: "- About",
      title: "Building clean interfaces with purpose.",
      p1: "I'm Grady, a frontend developer and UI designer focused on building minimal, functional, and high-performance digital products.",
      p2: "My approach is simple: understand the problem, design with clarity, and build with clean, scalable code.",
      p3: "I care about performance, usability, and simplicity — removing everything unnecessary to focus on what really matters.",
      cv: "Download CV",
      stats: {
        projects: "Projects built",
        hours: "Hours of coding",
        tech: "Technologies",
        commitment: "Commitment",
      },
    },
    services: {
      tag: "- Services",
      title: "What I do, end to end.",
      items: [
        {
          title: "Product Design",
          description: "Interfaces and design systems built around real user workflows and brand clarity.",
        },
        {
          title: "Web Development",
          description: "Production-grade React and TypeScript front-ends with a focus on performance.",
        },
        {
          title: "Brand Identity",
          description: "Marks, type systems and digital guidelines that stay sharp at every scale.",
        },
        {
          title: "Performance Audits",
          description: "Deep dives into Core Web Vitals, accessibility and code quality with a clear plan.",
        },
      ],
    },
    skills: {
      tag: "- Skills",
      title: "Tools & Technologies.",
      categories: {
        frontend: "Frontend",
        uiux: "UI/UX & Design",
        tools: "Tools"
      }
    },
    projects: {
      tag: "- Projects",
      title: "Selected works.",
      items: {
        afrix: {
          description: "Afrix Global is an innovative EdTech company improving education in Africa through technology, making learning accessible for students, professionals, and entrepreneurs.",
        },
        lovia: {
          description: "LOVIA is an innovative matchmaking platform designed for serious and lasting relationships.",
        },
        zuaplace: {
          description: "Zua Place is a centralized platform for managing hotel room bookings in the Ituri province of the Democratic Republic of Congo. Currently under development.",
        },
      },
    },
    contact: {
      tag: "- Contact",
      title: "Let's build something sharp.",
      description: "Tell me about your project. I usually respond within two business days.",
      labels: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
      },
      placeholders: {
        name: "Jane Doe",
        email: "jane@example.com",
        subject: "Website redesign, portfolio...",
        message: "Tell me what you're working on...",
      },
      button: "Send message",
      sent: "Message sent",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      tag: "- Développeur & Designer Indépendant",
      title: "Le design qui parle.",
      subtitle: "Le code qui performe.",
      description: "Interfaces minimales, exécution précise. J'aide les équipes à lancer des produits qui semblent inévitables.",
      cta: "Démarrer un projet",
      services: "Voir les services",
    },
    about: {
      tag: "- À propos",
      title: "Bâtir des interfaces épurées avec un but précis.",
      p1: "Je suis Grady, développeur frontend et designer UI spécialisé dans la création de produits numériques minimaux, fonctionnels et performants.",
      p2: "Mon approche est simple : comprendre le problème, concevoir avec clarté et construire avec un code propre et évolutif.",
      p3: "Je privilégie la performance, l'utilisabilité et la simplicité — en supprimant tout le superflu pour me concentrer sur l'essentiel.",
      cv: "Télécharger le CV",
      stats: {
        projects: "Projets réalisés",
        hours: "Heures de code",
        tech: "Technologies",
        commitment: "Engagement",
      },
    },
    services: {
      tag: "- Services",
      title: "Ce que je fais, de bout en bout.",
      items: [
        {
          title: "Design de Produit",
          description: "Interfaces et systèmes de design conçus autour des flux utilisateurs réels et de la clarté de la marque.",
        },
        {
          title: "Développement Web",
          description: "Front-ends React et TypeScript de qualité production, axés sur la performance.",
        },
        {
          title: "Identité de Marque",
          description: "Logos, systèmes typographiques et chartes graphiques numériques qui restent nets à toutes les échelles.",
        },
        {
          title: "Audits de Performance",
          description: "Analyses approfondies des Core Web Vitals, de l'accessibilité et de la qualité du code avec un plan clair.",
        },
      ],
    },
    skills: {
      tag: "- Compétences",
      title: "Outils & Technologies.",
      categories: {
        frontend: "Frontend",
        uiux: "UI/UX & Design",
        tools: "Outils"
      }
    },
    projects: {
      tag: "- Projets",
      title: "Travaux sélectionnés.",
      items: {
        afrix: {
          description: "Afrix Global est une entreprise EdTech innovante qui améliore l'éducation en Afrique grâce à la technologie, rendant l'apprentissage accessible aux étudiants, professionnels et entrepreneurs.",
        },
        lovia: {
          description: "LOVIA est une plateforme innovante de matchmaking conçue pour des relations sérieuses et durables.",
        },
        zuaplace: {
          description: "Zua Place est une plateforme centralisée pour la gestion des réservations de chambres d'hôtel dans la province de l'Ituri, en RD Congo. Actuellement en développement.",
        },
      },
    },
    contact: {
      tag: "- Contact",
      title: "Construisons quelque chose de précis.",
      description: "Parlez-moi de votre projet. Je réponds généralement sous deux jours ouvrés.",
      labels: {
        name: "Nom",
        email: "E-mail",
        subject: "Sujet",
        message: "Message",
      },
      placeholders: {
        name: "Jane Doe",
        email: "jane@exemple.com",
        subject: "Refonte de site, portfolio...",
        message: "Dites-moi sur quoi vous travaillez...",
      },
      button: "Envoyer le message",
      sent: "Message envoyé",
    },
  },
};
