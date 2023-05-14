import { APP_NAME } from './config/index';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    globalName: APP_NAME,
    typescript: {
        strict: true
    },
    css: [
        "~/styles/main.scss"
    ],
    modules: [
        ['@nuxtjs/google-fonts', {
            families: {
                'Nunito Sans': true,
            },
            download: true,
            inject: true,
            display: 'swap',
            useStylesheet: true
        }],
        'nuxt-svgo'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/styles/_variables.scss" as *; @use "@/styles/_mixins.scss" as *;',
                }
            }
        }
    }
})
