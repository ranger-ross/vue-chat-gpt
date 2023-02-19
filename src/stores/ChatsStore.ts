import {reactive} from 'vue'
import {Chat} from "../types/Chat";

export const chatsStore = reactive({
    chats: [] as Chat[]
})