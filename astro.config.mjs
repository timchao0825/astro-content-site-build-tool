import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // if url has folder name , need update base route
  base: '/test/',
  vite: {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/setting/init.scss";`
        }
      }
    }
  }
})
