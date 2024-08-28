
 <script>
import { store } from '../store.js';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    FontAwesomeIcon,
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

    const calculateStars = (vote) => Math.ceil(vote / 2);

    return {
      store,
      getFlag,
      calculateStars,
      faStar,
    };
  },
};
</script>

<template>
  <div>
    <div v-if="store.results.length > 0">
      <h2>Movies</h2>
      <div class="cards-container">
        <div 
          class="card" 
          v-for="item in store.results" 
          :key="item.id"
          @mouseover="item.isHovered = true"
          @mouseleave="item.isHovered = false"
        >
          <img 
            :src="item.poster_path ? `https://image.tmdb.org/t/p/w342${item.poster_path}` : 'https://via.placeholder.com/342x513'" 
            :alt="item.title || item.name"
          />
          <div class="card-content" v-if="item.isHovered">
            <h3>{{ item.title || item.name }}</h3>
            <p>{{ item.overview }}</p>
            <div class="stars">
              <FontAwesomeIcon 
                v-for="(n, index) in calculateStars(item.vote_average)" 
                :key="'full-' + index" 
                :icon="faStar"
                class="star"
              />
              <FontAwesomeIcon 
                v-for="(n, index) in (5 - calculateStars(item.vote_average))" 
                :key="'empty-' + index" 
                :icon="faStar"
                class="empty-star"
              />
            </div>
            <span :class="`fi fi-${getFlag(item.original_language)}`"></span>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="store.resultsSeriesTv.length > 0">
      <h2>TV Series</h2>
      <div class="cards-container">
        <div 
          class="card" 
          v-for="item in store.resultsSeriesTv" 
          :key="item.id"
          @mouseover="item.isHovered = true"
          @mouseleave="item.isHovered = false"
        >
          <img 
            :src="item.poster_path ? `https://image.tmdb.org/t/p/w342${item.poster_path}` : 'https://via.placeholder.com/342x513'" 
            :alt="item.title || item.name"
          />
          <div class="card-content" v-if="item.isHovered">
            <h3>{{ item.title || item.name }}</h3>
            <p>{{ item.overview }}</p>
            <div class="stars">
              <FontAwesomeIcon 
                v-for="(n, index) in calculateStars(item.vote_average)" 
                :key="'full-' + index" 
                :icon="faStar"
                class="star"
              />
              <FontAwesomeIcon 
                v-for="(n, index) in (5 - calculateStars(item.vote_average))" 
                :key="'empty-' + index" 
                :icon="faStar"
                class="empty-star"
              />
            </div>
            <span :class="`fi fi-${getFlag(item.original_language)}`"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.card {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
}

.card-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.card:hover .card-content {
  opacity: 1;
}

.stars {
  display: flex;
  align-items: center;
}

.star, .empty-star {
  margin-right: 0.25rem;
  color: gold;
}

.empty-star {
  color: #e0e0e0;
}
</style>

