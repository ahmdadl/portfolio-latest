import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // In a real application, you would handle the form data here, e.g.:
        // - Send an email
        // - Save to a database
        console.log('Received contact form submission:', { name, email, message });

        res.status(200).json({ message: 'Message sent successfully!' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
