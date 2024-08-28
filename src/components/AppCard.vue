

 <script>
 import { store } from '../store.js';
 import { faStar } from '@fortawesome/free-solid-svg-icons';
 import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
 
 export default {
     components: {
         FontAwesomeIcon
     },
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
 
         const calculateStars = (vote) => {
             return Math.ceil(vote / 2);
         };
 
         return {
             store,
             getFlag,
             calculateStars,
             faStar,
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
                     {{ item.title || item.name }} ({{ item.original_title }}) 
                     <span>
                         <FontAwesomeIcon 
                             v-for="(n, index) in calculateStars(item.vote_average)" 
                             :key="'full-' + index" 
                             :icon="faStar" 
                         />
                         <FontAwesomeIcon 
                             v-for="(n, index) in (5 - calculateStars(item.vote_average))" 
                             :key="'empty-' + index" 
                             :icon="faStar" 
                             class="empty-star"
                         />
                     </span>
                     <span :class="`fi fi-${getFlag(item.original_language)}`"></span>
                 </li>
             </ul>
         </div>
         <div v-if="store.resultsSeriesTv.length > 0">
             <h2>Risultati delle Serie TV:</h2>
             <ul>
                 <li v-for="item in store.resultsSeriesTv" :key="item.id">
                     <img :src="item.poster_path ? `https://image.tmdb.org/t/p/w342${item.poster_path}` : 'https://via.placeholder.com/342x513'">
                     {{ item.title || item.name }} ({{ item.original_title }}) 
                     <span>
                         <FontAwesomeIcon 
                             v-for="(n, index) in calculateStars(item.vote_average)" 
                             :key="'full-' + index" 
                             :icon="faStar" 
                         />
                         <FontAwesomeIcon 
                             v-for="(n, index) in (5 - calculateStars(item.vote_average))" 
                             :key="'empty-' + index" 
                             :icon="faStar" 
                             class="empty-star"
                         />
                     </span>
                     <span :class="`fi fi-${getFlag(item.original_language)}`"></span>
                 </li>
             </ul>
         </div>
     </div>
 </template>
 
 <style>
 .empty-star {
     color: #e0e0e0; 
 }
 </style>
 



