import { motion } from 'framer-motion';
import codeImg from '../../assets/code.png';
import { LiquidButton } from '../animate-ui/buttons/liquid';

export default function About({ isDark }: { isDark: boolean }) {
    return (
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
                                src={codeImg}
                                alt='About Me'
                                width={320}
                                height={320}
                                className='w-full h-full object-cover'
                                loading='lazy'
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className='text-4xl font-bold mb-6'>About Me</h2>
                        <p
                            className={`text-lg mb-8 ${
                                isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}
                        >
                            Full-Stack Developer with 3 years of experience
                            designing and deploying scalable web applications
                            using Laravel, React, MySQL, MongoDB, and Tailwind
                            CSS. Delivered high impact projects, including
                            e-commerce platforms, medical systems, and booking
                            applications
                        </p>
                        return <LiquidButton>Liquid Button</LiquidButton>;
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
    );
}
