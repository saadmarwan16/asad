import {z} from 'zod';

export const timelineSchema = z.object({
    id: z.number().min(1, 'Invalid timeline id'),
    date: z.date({required_error: 'Date is required'}),
    image: z.string().url('Invalid timeline image url'),
    desciption: z.string().min(40, 'Description of timeline is too short')
})

export type TTimeline = z.infer<typeof timelineSchema>;