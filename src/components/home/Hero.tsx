import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Hero({
    isDark,
    scrollToSection,
}: {
    isDark: boolean;
    scrollToSection: (sectionId: string) => void;
}) {
    return (
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
                            Full Stack Developer with over 3 years of experience
                            in building web applications, integrating
                            third-party APIs, and delivering responsive
                            solutions. Passionate about creating impactful
                            software and continuously enhancing my skills.
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
    );
}
