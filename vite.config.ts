import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import styleImport, { VantResolve } from 'vite-plugin-style-import';
// @ts-nocheck
import { svgstore } from './src/vite_plugins/svgstore';

export default defineConfig({
    plugins: [
        vue(),
        styleImport({
            resolves: [VantResolve()]
        }),
        vueJsx({
            transformOn: true,
            mergeProps: true
        }),
        svgstore(),
    ]
})
