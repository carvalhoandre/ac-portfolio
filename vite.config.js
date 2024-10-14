import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@types": path.resolve(__dirname, "src/types"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@components": path.resolve(__dirname, "src/components"),
            "@config": path.resolve(__dirname, "src/config"),
            "@helper": path.resolve(__dirname, "src/helper"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@routes": path.resolve(__dirname, "src/routes"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
        },
    },
    build: {
        chunkSizeWarningLimit: 2000,
    },
    server: {
        host: true,
        port: 8080,
    },
    preview: {
        host: true,
        port: 8080,
    },
    optimizeDeps: {
        exclude: ["@typescript-eslint/eslint-plugin", "@typescript-eslint/parser"],
    },
});
