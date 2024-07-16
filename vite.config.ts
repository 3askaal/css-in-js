import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  root: path.join(__dirname, 'app'),
  plugins: [
    react(),
    mdx()
  ]
})
