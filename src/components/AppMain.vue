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
        <div class="row">
            <watch-card v-for="movie in store.movies" :key="movie.id" :prod="movie"></watch-card>
        </div>
    </div>
    <div class="container">
        <h3>Series:</h3>
        <div>
            <div class="row">
                <watch-card v-for="serie in store.tv" :key="serie.id" :prod="serie"></watch-card>
            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped>
.row {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding-bottom: 20px;
}

.container {
    padding-top: 40px;
}
</style>