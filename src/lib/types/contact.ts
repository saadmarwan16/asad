import {z} from 'zod';

export const contactSchema = z.object({
    name: z.string().min(2, 'Name must contain at least 2 characters'),
    phone: z.string().min(1, 'Phone number is required'),
    email: z.string().email('Enter a valid email'),
    message: z.string().min(25, 'Message must contain at least 25 characters')
})

export type TContact = z.infer<typeof contactSchema>;