import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email address.',
    }),
});

export default function ContactForm({ isDark }: { isDark: boolean }) {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        try {
            const response = await fetch(
                'https://api.emailjs.com/api/v1.0/email/send',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-Key': 'YOUR_API_KEY',
                    },
                    body: JSON.stringify(values),
                }
            );

            if (response.ok) {
                toast.success('Message sent successfully!');
                form.reset();
            } else {
                toast.error('Failed to send message. Please try again later.');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <div className='flex space-x-4'>
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem className='flex-1'>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder='Enter Your Email'
                                        className={` ${
                                            isDark
                                                ? 'bg-gray-700 border-gray-600'
                                                : 'bg-white'
                                        }`}
                                    />
                                </FormControl>
                                <FormMessage className='text-red-700 dark:text-red-400' />
                            </FormItem>
                        )}
                    />

                    <Button className='bg-orange-500 hover:bg-orange-600 text-white px-8'>
                        {isLoading && (
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                        )}
                        Contact Me
                    </Button>
                </div>
            </form>
        </Form>
    );
}
