import { createApp } from 'vue'
import App from './App.vue'
import {Quasar} from 'quasar';
import iconSet from 'quasar/icon-set/mdi-v4.js';
import lang from 'quasar/lang/de.js';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';
import '@quasar/extras/mdi-v4/mdi-v4.css';
import 'quasar/dist/quasar.css';

createApp(App).use(Quasar, {
    config: {},
    plugins: {},
    lang: lang,
    iconSet: iconSet
}).mount('#app')
