import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {}, // এটি মূলত একটি খালি অবজেক্ট দিয়ে দেয়া হচ্ছে
  },
  server: {
    host: true, // এইভাবে Vite আপনার লোকাল আইপি ব্যবহার করতে পারবে
    port: 5173, // প্রয়োজন মতো পোর্ট পরিবর্তন করতে পারেন
  },
});
