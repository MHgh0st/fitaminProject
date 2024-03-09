import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAndroid , faApple } from '@fortawesome/free-brands-svg-icons'
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {faMessage } from '@fortawesome/free-regular-svg-icons'

library.add(faAndroid , faApple, faMessage , faChevronUp);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
