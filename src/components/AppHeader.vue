
<script>
import SearchBar from './SearchBar.vue';

export default {
  components: {
    SearchBar,
  },
};
</script>

<template>
    <header class="app-header">
      <div class="logo">
        <img src="../assets/pngwing.com.png" alt="Netflix Logo" />
      </div>
      <SearchBar />
    </header>
  </template>
  
  
  <style scoped>
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #141414;
    padding: 1rem;
  }
  
  .logo img {
    height: 2rem;
  }
  </style>
  