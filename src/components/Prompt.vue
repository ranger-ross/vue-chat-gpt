<script setup lang="ts">
import {ref} from 'vue'

// defineProps<{ msg: string }>()

const text = ref('')
</script>


<template>
  <div class="prompt">
    <input
        name="main-prompt"
        class="prompt-input"
        v-model="text"
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