<script>
import axios from 'axios';
import { store } from './data/data';
import { apiKey, baseUri, language } from './data/index';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: 'Boolflix',
  components: { AppHeader, AppMain },
  data() {
    return {
      store,
      nameFilter: '',
    }
  },
  computed: {
    axiosConfig() {
      return {
        params: {
          api_key: apiKey,
          language: language,
          query: this.nameFilter
        }
      }
    },
  },
  methods: {
    titleFilter(word) {
      this.nameFilter = word
    },
    searchMovies() {
      if (!this.nameFilter) {
        this.movies = [];
        this.tv = [];
        return;
      }
      this.CatchApi('search/movie', 'movies');
      this.CatchApi('search/tv', 'tv');
    },
    CatchApi(url, groupArray) {
      axios.get(`${baseUri}/${url}`, this.axiosConfig)
        .then(res => {
          store[groupArray] = res.data.results;
        }).catch(err => {
          console.error(err);
          store.movies = [];
        });
    }
  },
}


</script>
<template>
  <app-header @filter-name="titleFilter" @call="searchMovies"></app-header>
  <app-main :title="store.movies.title"></app-main>
</template>
<style lang="scss">
@use './assets/scss/style.scss';
</style>