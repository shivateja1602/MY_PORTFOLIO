import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import path from "node:path"
import { fileURLToPath } from "node:url"

dotenv.config()

const app = express()
const port = process.env.PORT || 5000
const mongoUri = process.env.MONGODB_URI

app.use(cors())
app.use(express.json())

if (mongoUri) {
  mongoose
    .connect(mongoUri)
    .then(() => {
      console.log("MongoDB connected")
    })
    .catch((error) => {
      console.error("MongoDB connection failed:", error.message)
    })
}

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" })
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distPath = path.resolve(__dirname, "../dist")

app.use(express.static(distPath))

app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"))
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
