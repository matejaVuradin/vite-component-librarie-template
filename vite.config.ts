import {defineConfig} from 'vite'
import path from 'node:path';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react'

// TODO: change based on project!
const name = "MyComponentsLibrary" as const;
// NOTE: on change update `package.json` to mach!
const fileName = "my-components-library" as const;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['src/setupTest.ts']
  },
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve('./src/lib.ts'),
      name,
      formats: ['es', 'umd'],
      fileName: (format) => `${fileName}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
