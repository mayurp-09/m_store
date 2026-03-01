import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/m_store/',   // IMPORTANT: replace with your repo name if different
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        products: resolve(__dirname, 'products.html'),
        contact: resolve(__dirname, 'contact.html'),
        addToCart: resolve(__dirname, 'addToCart.html'),
      }
    }
  }
})