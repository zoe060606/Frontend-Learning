import { createApp } from 'vue'
import { createPinia } from 'pinia' 
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/variables.css';
import './styles/main-layout.css';
import './styles/kanban.css';
const app = createApp(App)
const pinia = createPinia() 

app.use(pinia)        
app.use(ElementPlus)  
app.mount('#app')     