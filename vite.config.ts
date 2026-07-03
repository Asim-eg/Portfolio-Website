import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import matter from "gray-matter";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const profilePath = fileURLToPath(new URL("./content/profile.md", import.meta.url));

export default defineConfig({
  plugins: [
    {
      name: "profile-data",
      resolveId(id) {
        return id === "virtual:profile-data" ? id : null;
      },
      load(id) {
        if (id !== "virtual:profile-data") {
          return null;
        }

        this.addWatchFile(profilePath);
        const raw = readFileSync(profilePath, "utf8");
        const { data } = matter(raw);

        return `export const rawProfile = ${JSON.stringify(data)};`;
      },
    },
    react(),
  ],
});
