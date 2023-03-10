import {Chat} from "../types/Chat";
import {createStore} from 'vuex'
import {createTitle} from "../util/TitleUtil";

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
            state.selectedChatIndex = state.chats.length - 1;
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
        setSelectedChatIndex(state, payload) {
            state.selectedChatIndex = payload.index;
        },
        addMessage(state, payload) {
            let chat = state.chats[state.selectedChatIndex];
            if (chat.messages.length === 0 && payload.message?.text) {
                chat.title = createTitle(payload.message?.text);
            }
            chat.messages.push(payload.message);
        },
    },
    getters: {
        chats(state) {
            return state.chats;
        },
        selectedChatIndex(state) {
            return state.selectedChatIndex;
        },
    }
})

chatsStore.subscribe((mutation, state) => {
    localStorage.setItem('chats', JSON.stringify(state.chats));
    localStorage.setItem('selectedChatIndex', JSON.stringify(state.selectedChatIndex));
})
