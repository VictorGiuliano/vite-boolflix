<script>
import axios from 'axios';
import { datiUpi } from './data/data';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: 'Boolflix',
  components: { AppHeader, AppMain },
  data() {
    return {
      datiUpi
    }
  },
  methods: {
    fetchFilm(url) {
      axios.get(url)
        .then(res => {
          datiUpi.filmUri = res.data.results
        })
    },
    fetchSeries(url) {
      axios.get(url)
        .then(res => {
          datiUpi.tvUri = res.data.results
        })
    },
  },
  created() {
    this.fetchFilm(datiUpi.filmUri);
    this.fetchSeries(datiUpi.tvUri);
  }
}


</script>
<template>
  <AppHeader />
  <AppMain />
</template>
<style lang="scss">
@use './assets/scss/style.scss';
</style>