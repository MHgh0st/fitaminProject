import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAndroid , faApple , faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import {faMessage } from '@fortawesome/free-regular-svg-icons'

library.add(faAndroid , faApple, faMessage , faGooglePlay);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
