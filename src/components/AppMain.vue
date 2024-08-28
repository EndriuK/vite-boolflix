
<template>
    <div class="app-main">
      <AppCard />
    </div>
  </template>
  
  <script>
  import AppCard from './AppCard.vue';
  
  export default {
    components: {
      AppCard,
    },
  };
  </script>
  
  <style scoped>
  .app-main {
    padding: 2rem;
    background-color: #141414;
    color: white;
  }
  </style>
  