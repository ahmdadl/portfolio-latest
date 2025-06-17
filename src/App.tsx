import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Code,
    Download,
    ExternalLink,
    Github,
    Gitlab,
    Linkedin,
    Mail,
    MapPin,
    Menu,
    Monitor,
    Moon,
    Palette,
    Phone,
    Smartphone,
    Sun,
    X,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function App() {
    const [isDark, setIsDark] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = [
                'home',
                'about',
                'services',
                'tech-stack',
                // 'skills',
                'projects',
                'cv',
                'contact',
            ];
            const currentSection = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About Me' },
        { id: 'services', label: 'Services' },
        { id: 'tech-stack', label: 'Tech Stack' },
        // { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'cv', label: 'CV' },
        { id: 'contact', label: 'Contact' },
    ];

    const services = [
        {
            icon: <Code className='w-8 h-8' />,
            title: 'Full Stack Development',
            description:
                'Develop full websites from the ground up. both backend and frontend and even devops if needed',
        },
        {
            icon: <Monitor className='w-8 h-8' />,
            title: 'Backend Development',
            description:
                'Specialized on Backend, I will make sure your app runs with the best performance',
        },
        {
            icon: <Smartphone className='w-8 h-8' />,
            title: 'App Design',
            description: '',
        },
        {
            icon: <Palette className='w-8 h-8' />,
            title: 'Graphic Design',
            description: '',
        },
    ];

    const techStack = {
        Frontend: [
            'React',
            'Remix',
            'Vue.js',
            'TypeScript',
            'ShadCN',
            'Tailwind CSS',
        ],
        Backend: ['PHP', 'Laravel', 'Mysql', 'MongoDB', 'Redis'],
        Tools: [
            'Git',
            'PHP Unit',
            'PHP Stan',
            'VPS',
            'AWS',
            'VS Code',
            'Postman',
        ],
        Mobile: ['Ionic'],
    };

    const skills = [
        { name: 'UX', progress: 92 },
        { name: 'Website Design', progress: 85 },
        { name: 'App Design', progress: 90 },
        { name: 'Graphic Design', progress: 88 },
    ];

    const projects = [
        {
            id: 1,
            title: 'AirCalling Landing Page Design',
            category: 'fullstack',
            type: 'live',
            image: '/placeholder.svg?height=300&width=400',
            description:
                'A modern landing page design for AirCalling with responsive layout and smooth animations.',
            technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
            github: 'https://github.com',
            live: 'https://example.com',
        },
        {
            id: 2,
            title: 'Business Landing Page Design',
            category: 'fullstack',
            type: 'live',
            image: '/placeholder.svg?height=300&width=400',
            description:
                'Professional business landing page with modern design and conversion optimization.',
            technologies: ['Vue.js', 'Nuxt.js', 'SCSS', 'Node.js'],
            github: 'https://github.com',
            live: 'https://example.com',
        },
        {
            id: 3,
            title: 'Ecom Web Page Design',
            category: 'backend',
            type: 'side',
            image: '/placeholder.svg?height=300&width=400',
            description:
                'E-commerce platform with advanced filtering and payment integration.',
            technologies: ['React', 'Express', 'MongoDB', 'Stripe'],
            github: 'https://github.com',
        },
    ];

    return (
        <div
            className={`min-h-screen transition-colors duration-300 ${
                isDark
                    ? 'dark bg-gray-900 text-white'
                    : 'bg-white text-gray-900'
            }`}
        >
            {/* Navigation */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? `${
                              isDark ? 'bg-gray-900/80' : 'bg-white/80'
                          } backdrop-blur-md shadow-lg`
                        : 'bg-transparent'
                }`}
            >
                <div className='container mx-auto px-4 py-4'>
                    <div className='flex items-center justify-between'>
                        {/* Logo */}
                        <div className='flex items-center space-x-2'>
                            <div className='w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center'>
                                <span className='text-white font-bold text-lg'>
                                    A
                                </span>
                            </div>
                            <span className='font-bold text-xl'>AhmdAdl</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className='hidden lg:flex items-center space-x-8'>
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`transition-colors duration-200 hover:text-orange-500 ${
                                        activeSection === item.id
                                            ? 'text-orange-500'
                                            : ''
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* Theme Toggle & Mobile Menu */}
                        <div className='flex items-center space-x-4'>
                            <Button
                                variant='ghost'
                                size='icon'
                                onClick={() => setIsDark(!isDark)}
                                className='rounded-full'
                            >
                                {isDark ? (
                                    <Sun className='w-5 h-5' />
                                ) : (
                                    <Moon className='w-5 h-5' />
                                )}
                            </Button>

                            {/* <Button
                                variant='ghost'
                                size='icon'
                                className='rounded-full'
                            >
                                <Globe className='w-5 h-5' />
                            </Button> */}

                            <Button
                                variant='ghost'
                                size='icon'
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className='lg:hidden rounded-full'
                            >
                                {isMenuOpen ? (
                                    <X className='w-5 h-5' />
                                ) : (
                                    <Menu className='w-5 h-5' />
                                )}
                            </Button>

                            <Button className='hidden lg:block bg-orange-500 hover:bg-orange-600 text-white'>
                                Download CV
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className={`lg:hidden ${
                                isDark ? 'bg-gray-800' : 'bg-white'
                            } border-t`}
                        >
                            <div className='container mx-auto px-4 py-4'>
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`block w-full text-left py-2 transition-colors duration-200 hover:text-orange-500 ${
                                            activeSection === item.id
                                                ? 'text-orange-500'
                                                : ''
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Section */}
            <section
                id='home'
                className='min-h-screen flex items-center relative overflow-hidden'
            >
                {/* Animated Background */}
                <div className='absolute inset-0 opacity-10'>
                    <div className='absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse'></div>
                    <div className='absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000'></div>
                    <div className='absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000'></div>
                </div>

                <div className='container mx-auto px-4 py-20 z-10'>
                    <div className='flex justify-center items-center'>
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className='w-full text-center'
                        >
                            <p className='text-orange-500 font-medium mb-2'>
                                Hi I am
                            </p>
                            <h1 className='text-orange-500 text-3xl font-medium'>
                                Ahmed Adel
                            </h1>
                            <h2 className='text-4xl lg:text-6xl font-bold mb-6 mt-0 pt-3'>
                                {/* UI & UX */}
                                <span
                                    className={
                                        isDark ? 'text-white' : 'text-gray-900'
                                    }
                                >
                                    Full Stack Developer
                                </span>
                            </h2>
                            <p
                                className={`text-lg mb-8 max-w-md mx-auto ${
                                    isDark ? 'text-gray-300' : 'text-gray-600'
                                }`}
                            >
                                with 3 years of experince
                            </p>
                            <Button
                                onClick={() => scrollToSection('projects')}
                                className='bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg cursor-pointer'
                            >
                                Hire Me
                            </Button>
                        </motion.div>

                        {/* <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className='flex justify-center'
                        >
                            <div className='relative'>
                                <div className='w-80 h-80 rounded-full overflow-hidden border-4 border-orange-500'>
                                    <img
                                        src='/placeholder.svg?height=320&width=320'
                                        alt='Profile'
                                        width={320}
                                        height={320}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4'>
                                    <Button
                                        variant='ghost'
                                        size='icon'
                                        className='rounded-full bg-white shadow-lg'
                                        asChild
                                    >
                                        <a href='#'>
                                            <Facebook className='w-5 h-5 text-blue-600' />
                                        </a>
                                    </Button>
                                    <Button
                                        variant='ghost'
                                        size='icon'
                                        className='rounded-full bg-white shadow-lg'
                                        asChild
                                    >
                                        <a href='#'>
                                            <Twitter className='w-5 h-5 text-blue-400' />
                                        </a>
                                    </Button>
                                    <Button
                                        variant='ghost'
                                        size='icon'
                                        className='rounded-full bg-white shadow-lg'
                                        asChild
                                    >
                                        <a href='#'>
                                            <Instagram className='w-5 h-5 text-pink-600' />
                                        </a>
                                    </Button>
                                    <Button
                                        variant='ghost'
                                        size='icon'
                                        className='rounded-full bg-white shadow-lg'
                                        asChild
                                    >
                                        <a href='#'>
                                            <Linkedin className='w-5 h-5 text-blue-700' />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div> */}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section
                id='about'
                className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
                <div className='container mx-auto px-4'>
                    <div className='grid lg:grid-cols-2 gap-12 items-center'>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className='flex justify-center'
                        >
                            <div className='w-80 h-80 rounded-full overflow-hidden'>
                                <img
                                    src='/placeholder.svg?height=320&width=320'
                                    alt='About Me'
                                    width={320}
                                    height={320}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className='text-4xl font-bold mb-6'>
                                About Me
                            </h2>
                            <p
                                className={`text-lg mb-8 ${
                                    isDark ? 'text-gray-300' : 'text-gray-600'
                                }`}
                            >
                                Full-Stack Developer with 3 years of experience
                                designing and deploying scalable web
                                applications using Laravel, React, MySQL,
                                MongoDB, and Tailwind CSS. Delivered high impact
                                projects, including e-commerce platforms,
                                medical systems, and booking applications
                            </p>

                            {/* <div className='space-y-6'>
                                {skills.map((skill, index) => (
                                    <div key={skill.name}>
                                        <div className='flex justify-between mb-2'>
                                            <span className='font-medium'>
                                                {skill.name}
                                            </span>
                                            <span className='text-orange-500'>
                                                {skill.progress}%
                                            </span>
                                        </div>
                                        <Progress
                                            value={skill.progress}
                                            className='h-2'
                                        />
                                    </div>
                                ))}
                            </div> */}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id='services' className='py-20'>
                <div className='container mx-auto px-4'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-16'
                    >
                        <h2 className='text-4xl font-bold mb-4'>Services</h2>
                        <p
                            className={`text-lg max-w-2xl mx-auto ${
                                isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}
                        >
                            Things i do the best.
                        </p>
                    </motion.div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                }}
                            >
                                <Card
                                    className={`p-6 text-center hover:shadow-lg transition-shadow duration-300 ${
                                        isDark
                                            ? 'bg-gray-800 border-gray-700'
                                            : 'bg-white'
                                    }`}
                                >
                                    <CardContent className='p-0'>
                                        <div className='w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                                            <div className='text-orange-500'>
                                                {service.icon}
                                            </div>
                                        </div>
                                        <h3 className='text-xl font-bold mb-3'>
                                            {service.title}
                                        </h3>
                                        <p
                                            className={
                                                isDark
                                                    ? 'text-gray-300'
                                                    : 'text-gray-600'
                                            }
                                        >
                                            {service.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section
                id='tech-stack'
                className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
                <div className='container mx-auto px-4'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-16'
                    >
                        <h2 className='text-4xl font-bold mb-4'>Tech Stack</h2>
                        <p
                            className={`text-lg max-w-2xl mx-auto ${
                                isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}
                        >
                            Technologies and tools I work with to bring ideas to
                            life.
                        </p>
                    </motion.div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {Object.entries(techStack).map(
                            ([category, technologies], index) => (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <Card
                                        className={`p-6 ${
                                            isDark
                                                ? 'bg-gray-900 border-gray-700'
                                                : 'bg-white'
                                        }`}
                                    >
                                        <CardContent className='p-0'>
                                            <h3 className='text-xl font-bold mb-4 text-orange-500'>
                                                {category}
                                            </h3>
                                            <div className='flex flex-wrap gap-2'>
                                                {technologies.map((tech) => (
                                                    <Badge
                                                        key={tech}
                                                        variant='secondary'
                                                        className={`${
                                                            isDark
                                                                ? 'bg-gray-700 text-gray-300'
                                                                : 'bg-gray-100 text-gray-700'
                                                        }`}
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            {/* <section id='skills' className='py-20'>
                <div className='container mx-auto px-4'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-16'
                    >
                        <h2 className='text-4xl font-bold mb-4'>My Skills</h2>
                        <p
                            className={`text-lg max-w-2xl mx-auto ${
                                isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}
                        >
                            A comprehensive overview of my technical and
                            creative abilities.
                        </p>
                    </motion.div>

                    <div className='max-w-2xl mx-auto'>
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                }}
                                className='mb-8'
                            >
                                <div className='flex justify-between mb-2'>
                                    <span className='font-medium text-lg'>
                                        {skill.name}
                                    </span>
                                    <span className='text-orange-500 font-bold'>
                                        {skill.progress}%
                                    </span>
                                </div>
                                <Progress
                                    value={skill.progress}
                                    className='h-3'
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Projects Section */}
            <section
                id='projects'
                className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
                <div className='container mx-auto px-4'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-16'
                    >
                        <h2 className='text-4xl font-bold mb-4'>My Projects</h2>
                        <p
                            className={`text-lg max-w-2xl mx-auto mb-8 ${
                                isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}
                        >
                            Lorem ipsum dolor sit amet consectetur. Mollis erat
                            duis aliquam mauris est risus lectus. Phasellus
                            consequat urna tellus
                        </p>

                        <div className='flex flex-wrap justify-center gap-4 mb-12'>
                            {/* <Button variant='outline' className='rounded-full'>
                                All
                            </Button>
                            <Button variant='outline' className='rounded-full'>
                                UI/UX
                            </Button>
                            <Button className='bg-orange-500 hover:bg-orange-600 text-white rounded-full'>
                                Web Design
                            </Button>
                            <Button variant='outline' className='rounded-full'>
                                App Design
                            </Button>
                            <Button variant='outline' className='rounded-full'>
                                Graphic Design
                            </Button> */}
                        </div>
                    </motion.div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                }}
                            >
                                <Card
                                    className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                                        isDark
                                            ? 'bg-gray-900 border-gray-700'
                                            : 'bg-white'
                                    }`}
                                >
                                    <div className='relative'>
                                        <img
                                            src={
                                                project.image ||
                                                '/placeholder.svg'
                                            }
                                            alt={project.title}
                                            width={400}
                                            height={300}
                                            className='w-full h-48 object-cover'
                                        />
                                        <div className='absolute top-4 left-4'>
                                            <Badge className='bg-orange-500 text-white'>
                                                {project.type === 'live'
                                                    ? 'Live Project'
                                                    : 'Side Project'}
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardContent className='p-6'>
                                        <h3 className='text-xl font-bold mb-2'>
                                            {project.title}
                                        </h3>
                                        <p
                                            className={`mb-4 ${
                                                isDark
                                                    ? 'text-gray-300'
                                                    : 'text-gray-600'
                                            }`}
                                        >
                                            {project.description}
                                        </p>
                                        <div className='flex flex-wrap gap-2 mb-4'>
                                            {project.technologies.map(
                                                (tech) => (
                                                    <Badge
                                                        key={tech}
                                                        variant='secondary'
                                                        className={`text-xs ${
                                                            isDark
                                                                ? 'bg-gray-700 text-gray-300'
                                                                : 'bg-gray-100 text-gray-700'
                                                        }`}
                                                    >
                                                        {tech}
                                                    </Badge>
                                                )
                                            )}
                                        </div>
                                        <div className='flex space-x-3'>
                                            <Button
                                                variant='outline'
                                                size='sm'
                                                className='flex items-center space-x-2'
                                            >
                                                <Github className='w-4 h-4' />
                                                <span>GitHub</span>
                                            </Button>
                                            {project.live && (
                                                <Button
                                                    size='sm'
                                                    className='bg-orange-500 hover:bg-orange-600 text-white flex items-center space-x-2'
                                                >
                                                    <ExternalLink className='w-4 h-4' />
                                                    <span>Live</span>
                                                </Button>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className='text-center'>
                        <Button
                            variant='outline'
                            className='flex items-center space-x-2 mx-auto'
                        >
                            <Github className='w-4 h-4' />
                            <span>View All on GitHub</span>
                        </Button>
                    </div>
                </div>
            </section>

            {/* CV Section */}
            <section id='cv' className='py-20'>
                <div className='container mx-auto px-4'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='text-center'
                    >
                        <h2 className='text-4xl font-bold mb-8'>My Resume</h2>
                        <div className='max-w-md mx-auto'>
                            <div
                                className={`p-8 rounded-lg border-2 border-dashed ${
                                    isDark
                                        ? 'border-gray-600'
                                        : 'border-gray-300'
                                } mb-8`}
                            >
                                <img
                                    src='/placeholder.svg?height=400&width=300'
                                    alt='CV Preview'
                                    width={300}
                                    height={400}
                                    className='w-full h-auto rounded-lg shadow-lg'
                                />
                            </div>
                            <Button className='bg-orange-500 hover:bg-orange-600 text-white flex items-center space-x-2 mx-auto'>
                                <Download className='w-4 h-4' />
                                <span>Download CV</span>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id='contact'
                className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
                <div className='container mx-auto px-4'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-16'
                    >
                        <h2 className='text-4xl font-bold mb-4'>
                            Let's Design Together
                        </h2>
                        <p
                            className={`text-lg max-w-2xl mx-auto ${
                                isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}
                        >
                            Lorem ipsum dolor sit amet consectetur. Tristique
                            amet sed massa nibh lectus netus in. Aliquet donec
                            morbi convallis pretium
                        </p>
                    </motion.div>

                    <div className='max-w-2xl mx-auto'>
                        <form className='space-y-6'>
                            <div className='flex space-x-4'>
                                <Input
                                    placeholder='Enter Your Email'
                                    className={`flex-1 ${
                                        isDark
                                            ? 'bg-gray-700 border-gray-600'
                                            : 'bg-white'
                                    }`}
                                />
                                <Button className='bg-orange-500 hover:bg-orange-600 text-white px-8'>
                                    Contact Me
                                </Button>
                            </div>
                        </form>

                        <div className='mt-12 grid md:grid-cols-3 gap-8 text-center'>
                            <div>
                                <div className='w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                    <Mail className='w-6 h-6 text-orange-500' />
                                </div>
                                <h3 className='font-bold mb-2'>Email</h3>
                                <p
                                    className={
                                        isDark
                                            ? 'text-gray-300'
                                            : 'text-gray-600'
                                    }
                                >
                                    hello@fawziux.com
                                </p>
                            </div>
                            <div>
                                <div className='w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                    <Phone className='w-6 h-6 text-orange-500' />
                                </div>
                                <h3 className='font-bold mb-2'>Phone</h3>
                                <p
                                    className={
                                        isDark
                                            ? 'text-gray-300'
                                            : 'text-gray-600'
                                    }
                                >
                                    +1 234 567 8900
                                </p>
                            </div>
                            <div>
                                <div className='w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                    <MapPin className='w-6 h-6 text-orange-500' />
                                </div>
                                <h3 className='font-bold mb-2'>Address</h3>
                                <p
                                    className={
                                        isDark
                                            ? 'text-gray-300'
                                            : 'text-gray-600'
                                    }
                                >
                                    New York, USA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className={`py-12 ${
                    isDark ? 'bg-gray-900' : 'bg-white'
                } border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
            >
                <div className='container mx-auto px-4'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className='flex items-center space-x-2 mb-4 md:mb-0'>
                            <div className='w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center'>
                                <span className='text-white font-bold text-lg'>
                                    A
                                </span>
                            </div>
                            <span className='font-bold text-xl'>AhmdAdl</span>
                        </div>

                        <div className='flex space-x-8 mb-4 md:mb-0'>
                            {navItems.slice(0, 6).map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`transition-colors duration-200 hover:text-orange-500 ${
                                        isDark
                                            ? 'text-gray-300'
                                            : 'text-gray-600'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        <div className='flex space-x-4'>
                            <Button
                                variant='ghost'
                                size='icon'
                                className='rounded-full'
                            >
                                <Linkedin className='w-5 h-5' />
                            </Button>
                            <Button
                                variant='ghost'
                                size='icon'
                                className='rounded-full'
                            >
                                <Github className='w-5 h-5' />
                            </Button>
                            <Button
                                variant='ghost'
                                size='icon'
                                className='rounded-full'
                            >
                                <Gitlab className='w-5 h-5' />
                            </Button>
                        </div>
                    </div>

                    <div
                        className={`mt-8 pt-8 border-t ${
                            isDark ? 'border-gray-700' : 'border-gray-200'
                        } text-center`}
                    >
                        <p
                            className={
                                isDark ? 'text-gray-400' : 'text-gray-600'
                            }
                        >
                            © {new Date().getFullYear()}{' '}
                            <span className='text-orange-500'>AhmdAdl</span> All
                            Rights Reserved, Inc.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
