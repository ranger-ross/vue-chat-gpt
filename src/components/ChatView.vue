<script setup lang="ts">
import {ChatMessage} from "../types/ChatMessage";
import {GptMessage} from "../types/GptMessage";
import {PromptInput} from "../types/PromptInput";

defineProps<{ messages: ChatMessage[] }>()

const formatText = (text: string): string => {
  while (text.startsWith('\n')) {
    text = text.substring(1);
  }
  return text;
}

</script>


<template>


  <div v-for="message in messages">

    <!-- GPT response bubble-->
    <div class="gpt-message-bubble"
         v-if="(message as GptMessage).choices">
      {{ formatText((message as GptMessage).choices[0].text ?? '') }}
    </div>

    <!-- User input bubble-->
    <div class="user-message-bubble"
         v-if="!(message as GptMessage).choices">
      {{ formatText((message as PromptInput).text ?? '') }}
    </div>

  </div>

  <div v-if="messages.length === 0" class="welcome-message">
    Hello! Write a message and OpenAI will respond to it!
  </div>


</template>

<style scoped>

.welcome-message {
  text-align: center;
  margin-top: 92vh;
}

.gpt-message-bubble {
  margin: 8px;
  padding: 8px;
  background: #424242;
  border-radius: 5px;
  white-space: pre-wrap;
  max-width: fit-content;
}

.user-message-bubble {
  margin: 8px 8px 8px auto; /* Align bubble right */
  padding: 8px;
  background: #5d5d5d;
  border-radius: 5px;
  white-space: pre-wrap;
  max-width: fit-content;
}


</style>