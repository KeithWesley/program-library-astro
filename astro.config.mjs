import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";
import alpinejs from "@astrojs/alpinejs";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [
    alpinejs({
      entrypoint: "/src/entrypoint",
    }),
    db(),
  ],
  renderers: ["@astrojs/alpinejs"],
});
