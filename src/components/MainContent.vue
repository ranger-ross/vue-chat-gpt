<script setup lang="ts">
import Prompt from "./Prompt.vue";
</script>

<template>
  <div class="main-content">

    <div class="chat-container">
      Chat goes here
    </div>

    <div class="prompt-container">
      <Prompt />
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