import {z} from 'zod';

export const adminSearchSchema = z.object({
    query: z.string().min(2, 'Search query must contain at least 2 characters'),
})

export type TAdminSearch = z.infer<typeof adminSearchSchema>;