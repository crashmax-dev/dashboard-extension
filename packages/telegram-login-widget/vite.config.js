import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import { peerDependencies } from './package.json'

export default defineConfig({
  plugins: [
    dts({ insertTypesEntry: true }),
    react(),
    tsConfigPaths()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      formats: 'es'
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: [
        {
          dir: resolve(__dirname, 'dist'),
          entryFileNames: '[name].js',
          globals: {
            react: 'React'
          }
        }
      ]
    }
  }
})
