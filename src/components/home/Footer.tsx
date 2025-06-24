import { Button } from '@/components/ui/button';
import { Github, Gitlab, Linkedin } from 'lucide-react';
import { navItems } from '../../lib/data';

export default function Footer({
    isDark,
    scrollToSection,
}: {
    isDark: boolean;
    scrollToSection: (sectionId: string) => void;
}) {
    return (
        <footer
            className={`py-12 ${isDark ? 'bg-gray-900' : 'bg-white'} border-t ${
                isDark ? 'border-gray-700' : 'border-gray-200'
            }`}
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
                                    isDark ? 'text-gray-300' : 'text-gray-600'
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
                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                        © {new Date().getFullYear()}{' '}
                        <span className='text-orange-500'>AhmdAdl</span> All
                        Rights Reserved, Inc.
                    </p>
                </div>
            </div>
        </footer>
    );
}
