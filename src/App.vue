<script setup lang="ts">
import Layout from "./components/Layout.vue";
</script>

<script lang="ts">

import {chatsStore} from "./stores/ChatsStore";
import {appStateStore} from "./stores/AppStateStore";

export default {
  beforeMount() {
    chatsStore.commit('loadData');

    appStateStore.selectedChatIndex = chatsStore.state.chats.length > 0 ? 0 : -1;
  }
}

</script>

<template>
  <Layout/>
</template>
