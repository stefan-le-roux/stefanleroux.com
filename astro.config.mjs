// @ts-check
import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
	site: "https://stefanleroux.com",
	markdown: {
		processor: satteri({
			features: { directive: true },
		}),
	},
	integrations: [mdx(), sitemap()],
	trailingSlash: "always",
});
