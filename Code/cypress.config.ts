import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportHeight: 800,
    viewportWidth: 360,
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
