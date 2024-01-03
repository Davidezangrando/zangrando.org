import { defineConfig } from 'vite' ;

export default defineConfig ({
  
  server: {
    https: {
      key: './privkey.key',
      cert: './cert.key',
    },
    host: true, 
    port: 80,
  },
});