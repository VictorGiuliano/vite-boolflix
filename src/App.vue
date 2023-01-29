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
      if (!this.titleFilter) {
        this.movies = [];
        return;
      }
      axios.get(`${baseUri}/search/movie`, this.axiosConfig)
        .then(res => {
          store.movies = res.data.results;
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