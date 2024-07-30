import {defineCollection} from 'astro:content';
import z from 'zod';

const codeSchema = z.object({
	filename: z.string(),
	lang: z.string(),
	value: z.string(),
});

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
		lang: z.string(),
		value: z.string(),
	}),
]);

const variantSchema = z.object({
	component: z.string(),
	header: z.string(),
	code: codeSchema,
});

const versionSchema = z.object({
	framework: z.string(),
	lang: z.string(),
	component: z.string().optional(),
	variants: z.array(variantSchema).optional(),
	content: z.array(contentBlockSchema),
});

export const docsSchema = z.object({
	title: z.string(),
	description: z.string(),
	creator: z.string(),
	versions: z.array(versionSchema),
});

const docsCollection = defineCollection({
	schema: docsSchema,
	});
	
	export const collections = {
	sidebar: docsCollection,
	};
	
export const COLLECTIONS = ['sidebar'] as const;