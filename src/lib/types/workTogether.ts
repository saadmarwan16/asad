import {z} from 'zod';

export const workTogetherSchema = z.object({
    name: z.string().min(2, 'Name must contain at least 2 characters'),
    company: z.string().min(1, 'Company name is required'),
    email: z.string().email('Enter a valid email'),
    message: z.string().min(25, 'Message must contain at least 25 characters')
})

export type TWorkTogether = z.infer<typeof workTogetherSchema>;