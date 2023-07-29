import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";


export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(Toast, {
        hideProgressBar : true,
        showCloseButtonOnHover: true,
        timeout: 3000,
        position: POSITION.BOTTOM_RIGHT,
    });
  })

