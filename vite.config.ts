import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    plugins: [react(), tailwindcss()],
    define: {
      "process.env.SECRET_KEY": JSON.stringify(env.SECRET_KEY),
    },
    resolve: {
      alias: { "@": path.resolve(__dirname, ".") },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== "true",
    },
    build: {
      cssCodeSplit: true,
      modulePreload: {
        polyfill: false,
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("framer-motion")) {
              return "motion";
            }
            if (id.includes("react") || id.includes("react-dom")) {
              return "vendor";
            }
            if (id.includes("lucide-react")) {
              return "icons";
            }
          },
        },
      },
    },
  };
});
