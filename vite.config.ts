import { AliasOptions, defineConfig } from 'vite'
import path from 'path'

const resolve = (rel: string) => path.resolve(__dirname, rel)

export default defineConfig({
    build: {
        outDir: './docs',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            pages: resolve('src/pages'),
            home: resolve('src/pages/home'),
            contact: resolve('src/pages/contact'),
            navbar: resolve('src/pages/navbar'),
            cars: resolve('src/pages/cars'),
        },
    },
})
