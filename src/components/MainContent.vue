<script setup lang="ts">
import Prompt from "./Prompt.vue";
import ChatView from "./ChatView.vue";

</script>

<script lang="ts">

import {CreateCompletionResponse} from "openai/api";

export default {
  data() {
    return {
      messages: [] as CreateCompletionResponse[]
    };
  },
  methods: {
    chat: async (prompt: string) => {
      console.log('Send Prompt', prompt);

      fetch(encodeURI(`/api/chat?prompt=${prompt}`))
          .then(response => response.json())
          .then(response => {
            console.log(response);
          })
    }
  }
}

</script>


<template>
  <div class="main-content">

    <div class="chat-container">
      <ChatView/>
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