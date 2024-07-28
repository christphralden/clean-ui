import {defineCollection} from 'astro:content';
import z from 'zod';

const contentBlockSchema = z.union([
	z.object({
		type: z.literal('header'),
		value: z.string(),
	}),
	z.object({
		type: z.literal('description'),
		value: z.string(),
	}),
	z.object({
		type: z.literal('code'),
		filename: z.string(),
		lang:z.string(),
		value: z.string(),
	}),
]);

const sidebarCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		lang: z.string(),
		creator: z.string(),
		content: z.array(contentBlockSchema),
	}),
});

export const collections = {
	sidebar: sidebarCollection,
};

export const COLLECTIONS = ['sidebar'] as const;
