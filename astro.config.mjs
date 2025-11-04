// @ts-check
import { defineConfig, envField } from 'astro/config'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),

  env: {
    schema: {
      SUPABASE_PUBLIC_URL: envField.string({ context: 'server', access: 'public' }),
      SERVICE_ROLE_KEY: envField.string({ context: 'server', access: 'secret' })
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});