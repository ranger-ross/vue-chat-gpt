<script lang="ts">

import {chatsStore} from "../stores/ChatsStore";
import {Chat} from "../types/Chat";
import {DEFAULT_TITLE} from "../util/TitleUtil";

export default {
  computed: {
    chats() {
      return chatsStore.getters.chats;
    },
    currentChatIndex() {
      return chatsStore.getters.selectedChatIndex ?? -1;
    }
  },
  methods: {
    addNewChat() {
      const newChat: Chat = {
        title: DEFAULT_TITLE,
        messages: []
      }

      chatsStore.commit({
        type: "addChat",
        newChat: newChat,
      });
    },
    selectChat(index: number) {
      console.log('selecting chat with index', index)

      chatsStore.commit({
        type: 'setSelectedChatIndex',
        index: index
      })
    }
  }
}

</script>

<template>
  <div class="side-bar">

    <div class="chat-list-container">
      <div v-for="(chat, index) in chats"
           @click="selectChat(index)"
           :class="[
               'chat-tile',
               index === currentChatIndex ? 'selected-chat' : ''
           ]">
        {{ chat.title }}
      </div>
    </div>

    <button class="new-chat-button"
            @click="addNewChat">
      New Chat
    </button>

  </div>
</template>

<style scoped>
.side-bar {
  background: #2a2a2a;
  height: 100vh;
  border-right: #5d5d5d solid 2px;
  display: flex;
  flex-direction: column;
}

.chat-list-container {
  flex-grow: 1;
}

.chat-tile {
  padding: 8px;
  background: #484848;
  border-radius: 5px;
  margin: 6px;
  cursor: pointer;
}

.new-chat-button {
  margin: 8px;
  height: 40px;
  font-size: large;
}

.selected-chat {
  background: #737373;
}

</style>


