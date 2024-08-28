
 <script>
import { store } from '../store.js';

export default {
  data() {
    return {
      searchQuery: '',
      store,
    };
  },
  methods: {
    searchContent() {
      if (this.searchQuery.toLowerCase()) {
        store.searchAll(this.searchQuery).catch(error => {
          console.error("Errore nella ricerca:", error);
        });
      }
    },
    handleKeyDown(event) {
      if (event.key === 'Enter') {
        this.searchContent();
      }
    },
  },
};
</script>

<template>
  <div class="search-bar">
    <input 
      v-model="searchQuery" 
      placeholder="Cerca un film o una serie..." 
      @keydown="handleKeyDown"
    />
    <button @click="searchContent">Cerca</button>
  </div>
</template>

<style scoped>
.search-bar {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.search-bar input {
  width: 300px;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.search-bar button {
  padding: 0.5rem 1rem;
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.search-bar button:hover {
  background-color: #f40612;
}
</style>
