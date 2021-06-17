import { createApp} from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import "./assets/font-icon/iconfont.css"
import "./assets/font-icon/iconfont.js"

const app = createApp(App)
installElementPlus(app)
app.mount('#app')