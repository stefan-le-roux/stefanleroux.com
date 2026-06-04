// @ts-check
import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

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
