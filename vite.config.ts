

import path from 'path';

// import { atoms } from '@metagptx/web-sdk/plugins';

import Sitemap from 'vite-plugin-sitemap';
import { defineConfig, type ConfigEnv } from 'vite';

function escapeHtmlAttr(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

process.env.VITE_APP_TITLE ??= process.env.OVERVIEW_TITLE ?? 'shadcnui';
process.env.VITE_APP_DESCRIPTION ??= process.env.OVERVIEW_DESCRIPTION ?? 'Atoms Generated Project';
process.env.VITE_APP_TITLE = escapeHtmlAttr(process.env.VITE_APP_TITLE);
process.env.VITE_APP_DESCRIPTION = escapeHtmlAttr(process.env.VITE_APP_DESCRIPTION);
process.env.VITE_APP_LOGO_URL ??= process.env.OVERVIEW_LOGO_URL ?? 'https://public-frontend-cos.metadl.com/mgx/img/favicon_atoms.ico';

// https://vitejs.dev/config/
//@ts-ignore
export default defineConfig(( { command }: ConfigEnv) => {
 
  return {
    plugins: [
      
    
      Sitemap({
        hostname: 'https://atoms.template.com',
        
        readable: true,
        generateRobotsTxt: true,
      }),
      
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: '0.0.0.0', // Listen on all network interfaces.
      port: parseInt(process.env.VITE_PORT || '3000'),
      proxy: {
        '/api': {
          target: `http://localhost:8000`,
          changeOrigin: true,
        },
      },
      watch: { usePolling: true, interval: 600 },
    },
    build: {
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes('node_modules')) {
          if (id.includes('react')) return 'react-vendor';
          if (id.includes('react-router')) return 'router-vendor';
          if (id.includes('@radix-ui')) return 'ui-vendor';
          if (id.includes('react-hook-form') || id.includes('zod')) return 'form-vendor';
          if (id.includes('@tanstack')) return 'query-vendor';

          return 'vendor';
        }
      },
    },
  },
  chunkSizeWarningLimit: 1000,
}
  };
});
