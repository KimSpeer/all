import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server:{
        https:false,
        host:'localhost',
    },
    plugins: [
        laravel([
            'resources/js/app.js',
        ]),
    ],
});
