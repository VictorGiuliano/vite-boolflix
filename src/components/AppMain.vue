<script>
import { store } from '../data/data';
export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    }

}
</script>
<template>
    <div class="container">
        <h3>Movies:</h3>
        <ul v-for="movie in store.movies" :key="movie.id">
            <li>{{ movie.title }}</li>
            <li>{{ movie.original_title }}</li>
            <li>{{ movie.original_language }}</li>
            <li>{{ movie.vote_average }}</li>
        </ul>
    </div>
</template>
<style>

</style>