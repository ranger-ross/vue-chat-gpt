<script setup lang="ts">
import Prompt from "./Prompt.vue";
import ChatView from "./ChatView.vue";

</script>

<script lang="ts">

export default {
  data: function () {
    return {
      messages: [] as any[]
    }
  },
  methods: {
    async chat(prompt: string) {
      console.log('Send Prompt', prompt);
      console.log(this.messages)
      // this.message = "updated"

      fetch(encodeURI(`/api/chat?prompt=${prompt}`))
      .then(response => response.json())
      .then(response => {

        this.messages.push(response)

        console.log(response);
      })
    }
  }
}
</script>


<template>
  <div class="main-content">

    <div class="chat-container">
      <ChatView />

      {{ messages.length > 0 ? messages[messages.length - 1].choices[0].text : ''}}

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