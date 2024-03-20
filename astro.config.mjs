import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";
import alpinejs from "@astrojs/alpinejs";
import htmx from "astro-htmx";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [
    alpinejs({
      entrypoint: "/src/entrypoint",
    }),
    htmx(),
    db(),
  ],
  renderers: ["@astrojs/alpinejs"],
  output: "hybrid",
  adapter: netlify(),
});
