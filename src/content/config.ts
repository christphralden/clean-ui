import { defineCollection } from 'astro:content';
import z from 'zod'

const sidebarCollection = defineCollection({
    type: 'content', 
    schema: z.object({
        title: z.string(),
        description: z.string(),
        body: z.string().optional(),
    }),
});

export const collections = {
    'sidebar': sidebarCollection,
};

export const COLLECTIONS = [
    'sidebar'
] as const
