// https://vitejs.dev/config/
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  const base = {
    plugins: [react()],
  };

  if ("build" === command) {
    return base;
  }

  const env = loadEnv(mode, process.cwd(), "");
  return {
    ...base,
    server: {
      proxy: {
        "/proxy": {
          target: env.VITE_FAKE_STORE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/proxy/, ""),
          secure: false,
          ws: true,
        },
      },
    },
  };
});