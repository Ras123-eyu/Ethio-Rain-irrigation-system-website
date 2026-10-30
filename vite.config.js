import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 850,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // jspdf and its sub-dependencies for PDF generation (lazy-loaded)
            if (
              id.includes('/jspdf/') ||
              id.includes('/canvg/') ||
              id.includes('/html2canvas/') ||
              id.includes('/dompurify/') ||
              id.includes('/fflate/') ||
              id.includes('/fast-png/') ||
              id.includes('\\jspdf\\') ||
              id.includes('\\canvg\\') ||
              id.includes('\\html2canvas\\') ||
              id.includes('\\dompurify\\') ||
              id.includes('\\fflate\\') ||
              id.includes('\\fast-png\\')
            ) {
              return 'vendor-jspdf'
            }
            // Lucide icons
            if (id.includes('lucide-react')) {
              return 'vendor-icons'
            }
            // Routing
            if (id.includes('react-router-dom') || id.includes('react-router') || id.includes('@remix-run')) {
              return 'vendor-router'
            }
            // SEO Helmet
            if (id.includes('react-helmet-async')) {
              return 'vendor-helmet'
            }
            // Core React runtime
            if (
              id.includes('/react/') ||
              id.includes('/react-dom/') ||
              id.includes('/scheduler/') ||
              id.includes('\\react\\') ||
              id.includes('\\react-dom\\') ||
              id.includes('\\scheduler\\')
            ) {
              return 'vendor-react'
            }
          }
        },
      },
    },
  },
})
