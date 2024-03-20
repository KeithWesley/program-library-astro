import { defineConfig } from "astro/config";

import node from "@astrojs/node";
import netlify from "@astrojs/netlify";
import alpinejs from "@astrojs/alpinejs";
import htmx from "astro-htmx";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [
    alpinejs({
      entrypoint: "/src/entrypoint",
    }),
    htmx(),
    db(),
  ],
  renderers: ["@astrojs/alpinejs"],
});
