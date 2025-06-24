import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../lib/data';

export default function Projects({ isDark }: { isDark: boolean }) {
    return (
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
                        A collection of projects I've worked on, showcasing my
                        skills and expertise in web development.
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
                                className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full py-0 ${
                                    isDark
                                        ? 'bg-gray-900 border-gray-700'
                                        : 'bg-white'
                                }`}
                            >
                                <div className='relative'>
                                    <img
                                        src={
                                            project.image || '/placeholder.svg'
                                        }
                                        alt={project.title}
                                        width={400}
                                        height={300}
                                        className='w-full h-48 object-cover'
                                    />
                                    <div className='absolute top-4 left-4 right-4 flex flex-col items-start gap-4'>
                                        <Badge className='bg-orange-500 text-white'>
                                            {project.type === 'live'
                                                ? 'Live Project'
                                                : 'Side Project'}
                                        </Badge>
                                        <Badge className='bg-blue-600 text-white'>
                                            {project.category === 'fullstack'
                                                ? 'Full Stack'
                                                : 'Backend'}
                                        </Badge>
                                    </div>
                                </div>
                                <CardContent className='p-6 h-full flex flex-col justify-between'>
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
                                        {project.technologies.map((tech) => (
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
                                        ))}
                                    </div>
                                    <div className='flex space-x-3'>
                                        {project.github && (
                                            <Button
                                                variant='outline'
                                                size='sm'
                                                className='flex items-center space-x-2'
                                                asChild
                                            >
                                                <a
                                                    href={project.github}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    <Github className='w-4 h-4' />
                                                    <span>GitHub</span>
                                                </a>
                                            </Button>
                                        )}

                                        {project.live && (
                                            <Button
                                                size='sm'
                                                className='bg-orange-500 hover:bg-orange-600 text-white flex items-center space-x-2'
                                                asChild
                                            >
                                                <a
                                                    href={project.live}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    <ExternalLink className='w-4 h-4' />
                                                    <span>Live</span>
                                                </a>
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
                        asChild
                    >
                        <a
                            href='https://github.com/ahmdadl'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='w-fit'
                        >
                            <Github className='w-4 h-4' />
                            <span>View All on GitHub</span>
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
