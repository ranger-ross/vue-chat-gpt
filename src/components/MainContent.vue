<script setup lang="ts">
import Prompt from "./Prompt.vue";
import ChatView from "./ChatView.vue";

</script>

<script lang="ts">

import {PromptInput} from "../types/PromptInput";
import {chatsStore} from "../stores/ChatsStore";
import {Chat} from "../types/Chat";

function createNewChat(firstPrompt: PromptInput, store: any) {

  const maxLength = 40;
  const isTooLong = firstPrompt.text.length > maxLength
  const title = firstPrompt.text.substring(0, maxLength) + (isTooLong ? '...' : '');

  const newChat: Chat = {
    title: title,
    messages: [firstPrompt]
  }

  store.commit({
    type: 'addChat',
    newChat: newChat,
  });

  return newChat;
}

export default {
  computed: {
    currentChat() {
      return chatsStore.getters.chats[chatsStore.getters.selectedChatIndex] ?? null;
    }
  },
  methods: {
    async chat(prompt: PromptInput) {
      console.log('Send Prompt', prompt);

      if (!this.currentChat) {
        createNewChat(prompt, chatsStore);
      } else {
        this.currentChat.messages.push(prompt);
      }

      fetch(encodeURI(`/api/chat?prompt=${prompt.text}`))
          .then(response => response.json())
          .then(response => {
            console.log(response);
            this.currentChat.messages.push(response)
          });
    }
  }
}
</script>


<template>
  <div class="main-content">

    <div class="chat-container">
      <ChatView :messages="currentChat?.messages ?? []"/>


    </div>

    <div class="prompt-container">
      <Prompt @send-prompt="chat"/>
    </div>

  </div>
</template>


<style scoped>

.main-content {
  background: #212121;
  height: 100vh;
  margin: 0;

  display: flex;
  flex-direction: column;
}

.chat-container {
  flex-grow: 1;
}

.prompt-container {
  margin: 8px;
}

</style>