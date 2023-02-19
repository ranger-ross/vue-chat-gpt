import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {chatsStore} from "./stores/ChatsStore";

const app = createApp(App);
app.mount('#app')
app.use(chatsStore);
