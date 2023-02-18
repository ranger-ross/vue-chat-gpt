<script setup lang="ts">
import {ref} from 'vue'

defineEmits<{
  (event: 'sendPrompt', text: string): void
}>()

const text = ref('')
</script>


<template>
  <div class="prompt">
    <input
        name="main-prompt"
        class="prompt-input"
        v-model="text"
        @keyup="e => {
          if (e.code  === 'Enter' && text !== '')
            $emit('sendPrompt', text)
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