import { Card, CardContent } from '@/components/ui/card';
import { services } from '@/lib/data';
import { motion } from 'framer-motion';

export default function Services({ isDark }: { isDark: boolean }) {
    return (
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
                                className={`p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full ${
                                    isDark
                                        ? 'bg-gray-800 border-gray-700 hover:bg-gray-900'
                                        : 'bg-white hover:bg-gray-100'
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
    );
}
