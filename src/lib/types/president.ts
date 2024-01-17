import {z} from 'zod';

export const presidentSchema = z.object({
    id: z.number().min(1, 'Invalid president id'),
    name: z.string().min(2, 'Name must contain at least 2 characters'),
    from: z.number().min(2015, 'Year cannot be before 2015'),
    to: z.number().min(2015, 'Year cannot be before 2015').max(new Date().getFullYear(), 'Invalid year'),
    image: z.string().url('Invalid president image url'),
    accomplishments: z.string().min(120, 'Description of president\'s accomplishments is too short')
})

export type TPresident = z.infer<typeof presidentSchema>;