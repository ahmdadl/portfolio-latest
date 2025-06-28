import {
    Code,
    FileText,
    Globe,
    Layout,
    Monitor,
    Palette,
    Rocket,
    Smartphone,
} from 'lucide-react';

export const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'services', label: 'Services' },
    { id: 'tech-stack', label: 'Tech Stack' },
    // { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'cv', label: 'CV' },
    { id: 'contact', label: 'Contact' },
];

export const services = [
    {
        icon: <Code className='w-8 h-8' />,
        title: 'Full Stack Development',
        description:
            'Crafting scalable web applications with React, TypeScript, and Tailwind CSS for dynamic front-ends, paired with Laravel and PHP for robust back-end logic, integrated with MySQL or MongoDB.',
    },
    {
        icon: <Monitor className='w-8 h-8' />,
        title: 'Backend Development',
        description:
            'Building secure, efficient server-side solutions using Laravel and PHP, with optimized database management in MySQL or MongoDB for high-performance applications.',
    },
    {
        icon: <Smartphone className='w-8 h-8' />,
        title: 'E-commerce Solutions',
        description:
            'Developing secure e-commerce platforms with Laravel and PHP, integrated with payment gateways like Amazon Payment, Moyasar, Tamara and Tabby and customizable front-ends using React and Tailwind CSS.',
    },
    {
        icon: <Palette className='w-8 h-8' />,
        title: 'API Development and Integration',
        description:
            'Creating RESTful APIs with Laravel and PHP for seamless data exchange, integrating third-party services like Apple Pay, Google Pay, or Firebase with TypeScript-enhanced React front-ends.',
    },
    {
        icon: <FileText className='w-8 h-8' />,
        title: 'Testing and Quality Assurance',
        description:
            'Ensuring robust application quality with PHPUnit and PHP Pest for unit and integration testing, delivering reliable Laravel-based back-ends',
    },
    {
        icon: <Layout className='w-8 h-8' />,
        title: 'CMS Development',
        description:
            'Building customizable content management systems using Laravel and PHP, with intuitive React and Tailwind CSS interfaces for seamless content updates.',
    },
    {
        icon: <Rocket className='w-8 h-8' />,
        title: 'Performance Optimization',
        description:
            'Enhancing application speed with Laravel query optimization for MySQL/MongoDB and React code-splitting, leveraging Tailwind CSS for lightweight, responsive designs.',
    },
    {
        icon: <Globe className='w-8 h-8' />,
        title: 'Front-End Development',
        description:
            'Designing responsive, user-friendly interfaces with React, TypeScript, and Tailwind CSS, ensuring cross-browser compatibility and optimal user experiences.',
    },
];

export const techStack = {
    Backend: ['PHP', 'Laravel', 'MySQL', 'MongoDB', 'Redis'],
    Frontend: ['TypeScript', 'React', 'Remix', 'ShadCN', 'Tailwind CSS'],
    Mobile: ['Ionic', 'VueJs'],
    Tools: ['Git', 'PHPUnit', 'PHPStan', 'AWS', 'VPS', 'Postman', 'VS Code'],
};

export const projects = [
    {
        id: 1,
        title: 'Azkary',
        category: 'fullstack',
        type: 'live',
        image: '/azkary.webp',
        description:
            'Azkary is a mobile application providing Islamic prayers, featuring Azkar, Adia, and Sibha functionalities for enhanced user engagement.',
        technologies: ['Ionic', 'VueJs', 'Sql lite', 'Firebase'],
        live: 'https://play.google.com/store/apps/details?id=com.ninjacoder.azkary',
        github: 'https://github.com/ahmdadl/azkary',
    },
    {
        id: 2,
        title: 'Kazlak',
        category: 'backend',
        type: 'live',
        image: '/kazlak.webp',
        description:
            'Kazlak is a web platform enabling restaurant customers to browse menus, order food online, and process payments seamlessly.',
        technologies: ['NodeJs', 'ExpressJS', 'MongoDB'],
        live: 'https://kazlak.com/en',
    },
    {
        id: 3,
        title: 'LaraToday',
        category: 'fullstack',
        type: 'side',
        image: '/laravel-today.webp',
        description:
            'LaraToday is a web application aggregating the latest Laravel tutorials and news, sourced from multiple Laravel-related websites.',
        technologies: ['Laravel', 'Livewire', 'MySQL', 'Tailwind CSS'],
        github: 'https://github.com/ahmdadl/laravel-today-website',
    },
    {
        id: 4,
        title: 'Wellness Medical Park',
        category: 'backend',
        type: 'live',
        image: '/Wellness Medical Park.webp',
        description:
            'Wellness Medical Park is a health and wellness center’s website, showcasing various clinics and services for comprehensive care.',
        technologies: ['Laravel', 'MongoDB'],
        live: 'https://wellnessmedicalpark.org/en',
    },
    {
        id: 5,
        title: 'Zamil AC',
        category: 'fullstack',
        type: 'live',
        image: '/zamil.webp',
        description:
            'Zamil AC is an e-commerce platform offering home conditioning systems in Saudi Arabia, with a user-friendly shopping experience.',
        technologies: ['Laravel', 'MongoDB', 'TypeScript', 'React'],
        live: 'https://zamilac.com/residential/en',
    },
    {
        id: 6,
        title: 'TechStore SPA',
        category: 'fullstack',
        type: 'side',
        image: '/techstore-spa.webp',
        description:
            'TechStore SPA is a single-page application version of an e-commerce platform, optimized for performance and user interaction.',
        technologies: [
            'Laravel',
            'MySQL',
            'Filament PHP',
            'TypeScript',
            'React',
            'TanStack Router',
            'Tailwind CSS',
        ],
        github: 'https://github.com/ahmdadl/simple-ecommerce-spa',
        live: 'https://techstore-spa.crafted-internet.com/en',
    },
    {
        id: 7,
        title: 'TechStore SSR',
        category: 'fullstack',
        type: 'side',
        image: '/techstore-ssr.webp',
        description:
            'TechStore SSR is a server-side rendered e-commerce platform with advanced filtering, payment integration, and a management dashboard, optimized for SEO.',
        technologies: [
            'Laravel',
            'MySQL',
            'Filament PHP',
            'TypeScript',
            'NodeJs',
            'React',
            'React Router',
            'Tailwind CSS',
        ],
        github: 'https://github.com/ahmdadl/simple-ecommerce-api',
        live: 'https://techstore.crafted-internet.com/en',
    },
].reverse();
