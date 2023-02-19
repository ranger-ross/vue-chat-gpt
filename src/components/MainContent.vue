<script setup lang="ts">
import Prompt from "./Prompt.vue";
import ChatView from "./ChatView.vue";

</script>

<script lang="ts">

import {PromptInput} from "../types/PromptInput";
import {ChatMessage} from "../types/ChatMessage";

export default {
  data: function () {
    return {
      messages: [] as ChatMessage[]
    }
  },
  methods: {
    async chat(prompt: PromptInput) {
      console.log('Send Prompt', prompt);
      this.messages.push(prompt);

      fetch(encodeURI(`/api/chat?prompt=${prompt.text}`))
          .then(response => response.json())
          .then(response => {
            console.log(response);
            this.messages.push(response)
          });
    }
  }
}
</script>


<template>
  <div class="main-content">

    <div class="chat-container">
      <ChatView :messages="messages"/>


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