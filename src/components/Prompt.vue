<script setup lang="ts">
import {ref} from 'vue'
import {PromptInput} from "../types/PromptInput";

defineEmits<{
  (event: 'sendPrompt', prompt: PromptInput): void
}>()

const text = ref('')
</script>


<template>
  <div class="prompt">
    <input
        autofocus
        name="main-prompt"
        class="prompt-input"
        v-model="text"
        @keyup="e => {
          if (e.code  === 'Enter' && text !== '') {
               $emit('sendPrompt', {
              text: text,
              timestamp: Date.now()
            });
          text = '';
          }
        }"
    />
  </div>
</template>


<style scoped>

.prompt {
  width: 100%;
}

.prompt-input {
  width: 100%;
  height: 30px;
  font-size: large;
}

</style>