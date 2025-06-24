import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact({ isDark }: { isDark: boolean }) {
    return (
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
                        Lorem ipsum dolor sit amet consectetur. Tristique amet
                        sed massa nibh lectus netus in. Aliquet donec morbi
                        convallis pretium
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
                                    isDark ? 'text-gray-300' : 'text-gray-600'
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
                                    isDark ? 'text-gray-300' : 'text-gray-600'
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
                                    isDark ? 'text-gray-300' : 'text-gray-600'
                                }
                            >
                                New York, USA
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
