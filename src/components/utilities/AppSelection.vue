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
    <form @submit.prevent="$emit('form-submit')">
        <input type="text" v-model.trim="this.word" :placeholder="placeholder || 'Cerca'"
            @keyup="$emit('word-change', word)">
        <button type="submit">Cerca</button>
    </form>
</template>
<style lang="scss" scoped>
@use '../../assets/scss/partials/mixin' as *;
@use '../../assets/scss/style.scss' as *;

input {
    height: 1.5rem;
    width: 10rem;
}

button {
    color: white;
    background-color: red;
    height: 2rem;
    width: 3rem;
    border-radius: 10%;
}
</style>