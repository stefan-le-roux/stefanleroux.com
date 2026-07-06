import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const postSchema = ({ image }: any) =>
	z.object({
		title: z.string(),
		slug: z.string(),
		pubDate: z.date(),
		description: z.string(),
		author: z.string(),
		image: image().optional(),
		alt: z.string().optional(),
		status: z.enum(["visible", "hidden", "draft"]).default("draft"),
	});

const blog = defineCollection({
	loader: glob({ pattern: "**/*.{astro,md,mdx}", base: "./src/posts/blog/" }),
	schema: postSchema,
});

const audit = defineCollection({
	loader: glob({ pattern: "**/*.{astro,md,mdx}", base: "./src/posts/audit/" }),
	schema: postSchema,
});

const share = defineCollection({
	loader: glob({ pattern: "**/*.{astro,md,mdx}", base: "./src/posts/share/" }),
	schema: postSchema,
});

export const collections = { blog, audit, share };
