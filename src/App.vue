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
      store, apiKey, baseUri, language,
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
    }
  },
  methods: {
    titleFilter(word) {
      this.nameFilter = word
    },
    searchMovies() {
      axios.get(`${baseUri}/search/movie`, this.axiosConfig)
        .then(res => {
          store.movies = res.data.results;
        }).catch(err => { console.error(err) });
    }
  },
}


</script>
<template>
  <app-header @filter-name="titleFilter" @call="searchMovies"></app-header>
  <AppMain />
</template>
<style lang="scss">
@use './assets/scss/style.scss';
</style>