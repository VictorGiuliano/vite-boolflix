<script>
import axios from 'axios';
import AppSelection from './utilities/AppSelection.vue';
export default {
    name: 'AppHeader',
    emits: ['filter-name', 'call'],
    components: { AppSelection },
    methods: {
        changeTitleFilter(word) {
            this.$emit('filter-name', word);
        },
        passMovies() {
            this.$emit('call');
        }
    }
}
</script>
<template>
    <header class="container">
        <div class="Logo">
            <img src="../assets/img/logo.png">
        </div>
        <app-selection placeholder="Cerca Film" @word-change="changeTitleFilter"
            @form-submit="passMovies"></app-selection>
    </header>
</template>
<style>

</style>