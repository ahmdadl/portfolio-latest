import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import About from './components/home/About';
import Contact from './components/home/Contact';
import CV from './components/home/CV';
import Footer from './components/home/Footer';
import Hero from './components/home/Hero';
import Projects from './components/home/Projects';
import Services from './components/home/Services';
import TechStack from './components/home/TechStack';
import { navItems } from './lib/data';

export default function App() {
    const [isDark, setIsDark] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches
    );
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
            <Hero isDark={isDark} scrollToSection={scrollToSection} />

            {/* About Section */}
            <About isDark={isDark} />

            {/* Services Section */}
            <Services isDark={isDark} />

            {/* Tech Stack Section */}
            <TechStack isDark={isDark} />

            {/* Projects Section */}
            <Projects isDark={isDark} />

            {/* CV Section */}
            <CV isDark={isDark} />

            {/* Contact Section */}
            <Contact isDark={isDark} />

            {/* Footer */}
            <Footer isDark={isDark} scrollToSection={scrollToSection} />
        </div>
    );
}
