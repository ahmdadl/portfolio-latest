import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import cvImg from '../../assets/ahmed-adel_cv_image.jpg';
import { Button } from '../ui/button';

export default function CV({ isDark }: { isDark: boolean }) {
    return (
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
                                isDark ? 'border-gray-600' : 'border-gray-300'
                            } mb-8`}
                        >
                            <img
                                src={cvImg}
                                alt='CV Preview'
                                width={300}
                                height={400}
                                className='w-full h-auto rounded-lg shadow-lg'
                                loading='lazy'
                            />
                        </div>
                        <Button
                            className='bg-orange-500 hover:bg-orange-600 text-white flex items-center space-x-2 mx-auto'
                            asChild
                        >
                            <a
                                href='/ahmed-adel-cv.pdf'
                                download={'ahmed-adel-cv.pdf'}
                            >
                                <Download className='w-4 h-4' />
                                <span>Download CV</span>
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
