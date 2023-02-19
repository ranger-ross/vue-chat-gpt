import {Chat} from "../types/Chat";
import {createStore} from 'vuex'
import {appStateStore} from "./AppStateStore";

// Create a new store instance.
export const chatsStore = createStore({
    state() {
        return {
            chats: [] as Chat[],
            selectedChatIndex: -1
        }
    },
    mutations: {
        addChat(state, payload) {
            state.chats = [...state.chats, payload.newChat];
            state.selectedChatIndex = state.chats.length;
        },
        loadData(state) {
            const chats = localStorage.getItem('chats');
            if (chats) {
                state.chats = JSON.parse(chats);
            }
            const selectedChatIndex = localStorage.getItem('selectedChatIndex');
            if (selectedChatIndex) {
                state.selectedChatIndex = JSON.parse(selectedChatIndex);
            }
        },
    },
    getters: {
        chats(state) {
            return state.chats;
        }
    }
})

chatsStore.subscribe((mutation, state) => {
    localStorage.setItem('chats', JSON.stringify(state.chats));
    localStorage.setItem('selectedChatIndex', JSON.stringify(state.selectedChatIndex));
})
