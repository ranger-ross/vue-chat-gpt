<script setup lang="ts">
import {ChatMessage} from "../types/ChatMessage";

defineProps<{ messages: ChatMessage[] }>()

</script>


<template>


  <div v-for="message in messages">

    <!-- GPT response bubble-->
    <div class="gpt-message-bubble"
         v-if="message.choices">
      {{message.choices[0].text ?? ''}}
    </div>

    <!-- User input bubble-->
    <div class="user-message-bubble"
         v-if="!message.choices">
      {{message.text ?? ''}}
    </div>

  </div>



</template>

<style scoped>

.gpt-message-bubble {
  margin: 8px;
  padding: 8px;
  background: #424242;
  border-radius: 5px;
  max-width: 50%;
}

.user-message-bubble {
  margin: 8px 8px 8px auto; /* Align bubble right */
  padding: 8px;
  background: #5d5d5d;
  border-radius: 5px;
  max-width: 50%;
}



</style>