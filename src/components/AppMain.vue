<script>
import { store } from '../data/data';
import WatchCard from './utilities/WatchCard.vue';
export default {
    name: "AppMain",
    data() {
        return {
            store
        };
    },
    components: { WatchCard }
}
</script>
<template>
    <div class="container">
        <h3>Movies:</h3>
        <watch-card v-for="movie in store.movies" :key="movie.id" :prod="movie"></watch-card>
        <h3>Series:</h3>
        <watch-card v-for="serie in store.tv" :key="serie.id" :prod="serie"></watch-card>
    </div>
</template>
<style>

</style>