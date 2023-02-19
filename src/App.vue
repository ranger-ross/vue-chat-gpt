<script setup lang="ts">
import Layout from "./components/Layout.vue";
</script>

<script lang="ts">

import {chatsStore} from "./stores/ChatsStore";

export default {
  beforeMount() {
    chatsStore.commit('loadData');
  }
}

</script>

<template>
  <Layout/>
</template>
