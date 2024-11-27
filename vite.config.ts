import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"), // Thêm alias cho thư mục src
            "@components": path.resolve(__dirname, "src/components"),
            "@public": path.resolve(__dirname, "public"),
        },
    },
});
