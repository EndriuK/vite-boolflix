<script>
import { store } from '../store.js';
export default {
    
    data () {
        return {
            store
        }
    }
    
}

</script>
<template>
    <div v-if="store.results.lenght > 0">
        <h2>Risultati della ricerca:</h2>
        <ul>
            <li v-for="item in store.results" :key="item.id">
                {{ item.title || item.name }} ({{ item.vote_average }})
                ({{ item.original_title }}) ({{ item.original_language }})
            </li>
        </ul> 

    </div>
</template>
<style lang="">
    
</style>