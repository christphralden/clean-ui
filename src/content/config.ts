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
		value: z.string(),
	}),
]);

const sidebarCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		content: z.array(contentBlockSchema),
	}),
});

export const collections = {
	sidebar: sidebarCollection,
};

export const COLLECTIONS = ['sidebar'] as const;
