import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { techStack } from '../../lib/data';

export default function TechStack({ isDark }: { isDark: boolean }) {
    return (
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
    );
}
