import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.{.astro,md,mdx}", base: "./src/posts/blog/" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			slug: z.string(),
			pubDate: z.date(),
			description: z.string(),
			author: z.string(),
			image: image(),
			alt: z.string(),
			tags: z.array(z.string()),
		}),
});

export const collections = { blog };
