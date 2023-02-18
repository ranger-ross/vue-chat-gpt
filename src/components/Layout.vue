<script setup lang="ts">
import SideBar from "./SideBar.vue";
import MainContent from "./MainContent.vue";
</script>

<template>

  <div style="display: flex">
    <div class="side-bar-container">
      <SideBar/>
    </div>

    <div class="main-content-container">
      <MainContent/>
    </div>
  </div>

</template>

<style>


.side-bar-container {
  height: 100vh;
  width: clamp(150px, 30vw, 350px);
}

.main-content-container {
  flex-grow: 1;
  height: 100vh;
}

</style>