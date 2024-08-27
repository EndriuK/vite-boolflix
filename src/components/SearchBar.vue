

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
            if (this.searchQuery.toLowerCase) {
                store.searchMovie(this.searchQuery)
                    .then(movieResults => {
                        return store.searchSeries(this.searchQuery)
                            .then(seriesResults => {
                                this.store.results = [...movieResults, ...seriesResults];
                            });
                    })
                    .catch(error => {
                        console.error("Errore nella ricerca:", error);
                    });
            }
        },

        handleKeyDown(event) {
            if (event.key === 'Enter') {
                this.searchContent();
            }
        }
    }
};
</script>

<template>
    <div>
        <input 
            v-model="searchQuery" 
            placeholder="Cerca un film o una serie..." 
            @keydown="handleKeyDown"
        />
        <button @click="searchContent">Cerca</button>

        <div v-if="store.results.length > 0">
            <h2>Risultati della ricerca:</h2>
            <ul>
                <li v-for="item in store.results" :key="item.id">
                    {{ item.title || item.name }} ({{ item.vote_average }})
                    ({{ item.original_title }}) ({{ item.original_language }})
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>

