import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path"; 

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: '/',
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        'components': path.resolve(__dirname, './src/components'),
        'modals': path.resolve(__dirname, './src/modals'),
        'stores': path.resolve(__dirname, './src/stores'),
        'pages': path.resolve(__dirname, './src/pages'),
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
