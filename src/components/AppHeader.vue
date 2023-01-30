<script>
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
    <header>
        <div class="container d-flex-space">
            <a href="#">
                <div class="Logo">
                    <img src="../assets/img/logo.png">
                </div>
            </a>

            <div>
                <app-selection placeholder="Cerca titolo" @word-change="changeTitleFilter"
                    @form-submit="passMovies"></app-selection>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use '../assets/scss/style.scss' as *;
@use '../assets/scss/partials/mixin' as *;

header {
    background-color: black;

    .img {
        width: auto;
        max-height: 50%;
    }
}

.d-flex-space {
    @include my-display-flex;
}
</style>