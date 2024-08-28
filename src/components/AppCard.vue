
<script>
import { store } from '../store.js';

export default {
    setup() {
        const getFlag = (languageCode) => {
            const languageCountry = {
                en: 'us',
                it: 'it',
                es: 'es',
                fr: 'fr',
                de: 'de',
                ru: 'ru',
            };
            return languageCountry[languageCode] || languageCode;
        };

        return {
            store,
            getFlag
        };
    },
}
</script>

<template>
    <div>
        <div v-if="store.results.length > 0">
            <h2>Risultati dei Film:</h2>
            <ul>
                <li v-for="item in store.results" :key="item.id">
                    <img :src="item.poster_path ? `https://image.tmdb.org/t/p/w342${item.poster_path}` : 'https://via.placeholder.com/342x513'">
                    {{ item.title || item.name }} ({{ item.original_title }}) ({{ item.vote_average }}) 
                    <span :class="`fi fi-${getFlag(item.original_language)}`"></span>
                </li>
            </ul>
        </div>
        <div v-if="store.resultsSeriesTv.length > 0">
            <h2>Risultati delle Serie TV:</h2>
            <ul>
                <li v-for="item in store.resultsSeriesTv" :key="item.id">
                    <img :src="item.poster_path ? `https://image.tmdb.org/t/p/w342${item.poster_path}` : 'https://via.placeholder.com/342x513'">
                    {{ item.title || item.name }} ({{ item.original_title }}) ({{ item.vote_average }})
                    <span :class="`fi fi-${getFlag(item.original_language)}`"></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang=""></style>



