import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  apiUrlmovie: "https://api.themoviedb.org/3/search/movie",
  apiUrlseries: "https://api.themoviedb.org/3/search/tv",
  apiKey: "66c34159f33cc2c0e75e1121358e6b68",
  results: [],

  searchMovie(movieName) {
    return axios
      .get(`${this.apiUrlmovie}?api_key=${this.apiKey}&query=${movieName}`)
      .then((response) => {
        return response.data.results;
      })
      .catch((error) => {
        console.error("Errore nella ricerca del film:", error);
        return null;
      });
  },

  searchSeries(seriesName) {
    return axios
      .get(`${this.apiUrlseries}?api_key=${this.apiKey}&query=${seriesName}`)
      .then((response) => {
        return response.data.results;
      })
      .catch((error) => {
        console.error("Errore nella ricerca della serie:", error);
        return null;
      });
  },
});
