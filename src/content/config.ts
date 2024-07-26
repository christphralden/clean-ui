import { defineCollection } from 'astro:content';
import z from 'zod'

// 2. Define your collection(s)
const sidebarCollection = defineCollection({
    type: 'content', 
    schema: z.object({
        title: z.string(),
        description: z.string(),
        body: z.string().optional(),
    }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'sidebar': sidebarCollection,
};