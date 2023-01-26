<script>
import AppSelection from './utilities/AppSelection.vue';
export default {
    name: 'AppHeader',
    data() {
        return {
            nameFilter: ''
        }
    },
    components: { AppSelection },
    methods: {
        onChange() {
            this.nameFilter = word;
        }
    }
}
</script>
<template>
    <header class="container">
        <div class="Logo">
            <img src="../assets/img/logo.png">
        </div>
        <app-selection placeholder="Cerca per Nome" @word-change="onChange"></app-selection>
    </header>
</template>
<style>

</style>