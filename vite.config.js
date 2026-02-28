import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/m_store/',
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, '.index.html'),
        addToCart: resolve(__dirname, 'addToCart.html'),
        contact: resolve(__dirname, 'contact.html'),
        about: resolve(__dirname, 'about.html'),
        products: resolve(__dirname, 'products.html'),
      }
    }
  }
})