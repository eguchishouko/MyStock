// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// 验证 Markdown 前面的 YAML 格式
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };