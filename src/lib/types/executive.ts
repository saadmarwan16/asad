import {z} from 'zod';

export const newExecutiveSchema = z.object({
    name: z.string().min(2, 'Name must contain at least 2 characters'),
    role: z.string().min(4, 'Invalid executive role'),
    duties: z.string().min(120, 'Description of executive member\'s duties is too short')
})

export const executiveSchema = z.object({
    id: z.number().min(1, 'Invalid executive id'),
    name: z.string().min(2, 'Name must contain at least 2 characters'),
    role: z.string().min(4, 'Invalid executive role'),
    image: z.string().url('Invalid executive image url'),
    duties: z.string().min(120, 'Description of executive member\'s duties is too short')
})

export type TNewExecutive = z.infer<typeof newExecutiveSchema>;

export type TExecutive = z.infer<typeof executiveSchema>;