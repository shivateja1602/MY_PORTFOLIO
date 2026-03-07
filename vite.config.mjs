import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "node:path"

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? ""
const isGitHubActions = process.env.GITHUB_ACTIONS === "true"
const isUserPageRepo = repoName.endsWith(".github.io")
const base = isGitHubActions && !isUserPageRepo ? `/${repoName}/` : "/"

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd()),
    },
  },
})
