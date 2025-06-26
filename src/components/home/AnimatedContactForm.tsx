import {
    InputButton,
    InputButtonAction,
    InputButtonInput,
    InputButtonProvider,
    InputButtonSubmit,
} from '@/components/animate-ui/buttons/input';
import * as EmailValidator from 'email-validator';
import { Check, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import * as React from 'react';
import { toast } from 'sonner';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const AnimatedContactForm = ({ isDark }: { isDark: boolean }) => {
    const [showInput, setShowInput] = React.useState(false);
    const [pending, startTransition] = React.useTransition();
    const [success, setSuccess] = React.useState(false);
    const [value, setValue] = React.useState('');
    const [emailError, setEmailError] = React.useState('');

    const handleSubmit = React.useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            if (!showInput) {
                setShowInput(true);
                return;
            }

            const emailInput = document.getElementById(
                'email-input'
            ) as HTMLInputElement;

            setEmailError('');

            if (!EmailValidator.validate(emailInput.value)) {
                setEmailError('Please enter a valid email address.');
                return;
            }

            startTransition(async () => {
                try {
                    const response = await fetch(
                        'http://api-supps.test/api/send-portfolio-mail',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'X-API-Key': 'YOUR_API_KEY',
                                'X-Application-Type': 'webOs',
                                'X-PUBLIC-TOKEN':
                                    '67EE4B4FABE39DE2697E566867BE24FF',
                            },
                            body: JSON.stringify({
                                email: emailInput.value,
                            }),
                        }
                    );

                    if (response.ok) {
                        toast.success('Message sent successfully!');
                        setSuccess(true);
                        await sleep(2000);
                        setSuccess(false);
                    } else {
                        toast.error(
                            'Failed to send message. Please try again later.'
                        );
                    }
                } catch (error) {
                    toast.error('An error occurred. Please try again later.');
                } finally {
                    setShowInput(false);
                    setValue('');
                }
            });
        },
        [showInput, setShowInput, setSuccess, setValue, emailError]
    );

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className='w-full flex items-center justify-center'
                noValidate
            >
                <InputButtonProvider
                    showInput={showInput}
                    setShowInput={setShowInput}
                >
                    <InputButton>
                        <InputButtonAction onClick={() => {}}>
                            {!showInput && 'Contact Me'}
                        </InputButtonAction>
                        <InputButtonSubmit
                            onClick={() => {}}
                            type='submit'
                            disabled={pending}
                            className={`${
                                pending || success ? 'aspect-square px-0' : ''
                            } bg-orange-500 hover:bg-orange-600 text-white`}
                        >
                            {success ? (
                                <motion.span
                                    key='success'
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Check />
                                </motion.span>
                            ) : pending ? (
                                <motion.span
                                    key='pending'
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Loader2 className='animate-spin' />
                                </motion.span>
                            ) : (
                                'Send'
                            )}
                        </InputButtonSubmit>
                    </InputButton>
                    <InputButtonInput
                        id='email-input'
                        type='email'
                        placeholder='your-email@example.com'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        disabled={pending}
                        autoFocus
                        className={`${
                            isDark ? 'bg-gray-700 border-gray-600' : 'bg-white'
                        }`}
                    />
                </InputButtonProvider>
            </form>
            <p className='text-red-600 dark:text-red-400 w-full flex items-center justify-center my-1 mb-3'>
                {emailError}
            </p>
        </>
    );
};
