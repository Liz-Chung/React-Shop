import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path"; 

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        'components': path.resolve(__dirname, './src/components'),
        'Modals': path.resolve(__dirname, './src/Modals'),
        'stores': path.resolve(__dirname, './src/stores'),
      },
    },
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