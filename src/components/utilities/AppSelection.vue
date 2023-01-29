<script>
export default {
    name: 'Selection',
    data() {
        return {
            word: '',
        }
    },
    emits: ['word-change', 'form-submit'],
    props: {
        placeholder: String
    }
}
</script>
<template>
    <div class="container">
        <form @submit.prevent="$emit('form-submit')">
            <input type="text" v-model.trim="this.word" :placeholder="placeholder || 'Cerca'"
                @keyup="$emit('word-change', word)">
            <button type="submit">GO</button>
        </form>
    </div>
</template>
<style>

</style>