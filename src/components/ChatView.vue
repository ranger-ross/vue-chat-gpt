<script setup lang="ts">
import {ChatMessage} from "../types/ChatMessage";

defineProps<{ messages: ChatMessage[] }>()

</script>


<template>

  {{ messages.length > 0 ? messages[messages.length - 1].choices[0].text : '' }}

</template>