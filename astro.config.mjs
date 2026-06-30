import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://stefanleroux.com",
	base: "/",
	trailingSlash: "always",
	integrations: [mdx(), sitemap()],
});
