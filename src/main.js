import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'
import store from './store/index'
import TheNoSidebar from "./layouts/TheNoSidebar.vue"
import TheDefault from "./layouts/TheDefault.vue"
import 'vue-search-select/dist/VueSearchSelect.css';
import VueHtmlToPaper from 'vue-html-to-paper';
import money from 'v-money3'



const app = createApp(App)

app.component('default-layout', TheDefault)
app.component('no-sidebar-layout', TheNoSidebar)
app.use(VueHtmlToPaper);
app.use(money);

// createApp(App).mount('#app')
app.use(store);
app.use(router);
app.mount('#app')