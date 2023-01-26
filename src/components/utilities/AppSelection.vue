<script>
export default {
    name: 'Selection',
    data() {
        return {
            word: '',
        }
    },
    emits: ['word-change'],
    props: {
        placeholder: String
    }
}
</script>
<template>
    <div class="container">
        <input type="text" v-model.trim="this.word" :placeholder="placeholder || 'Cerca'"
            @keyup="$emit('word-change', word)">
        <button type="button">GO</button>
    </div>
</template>
<style>

</style>