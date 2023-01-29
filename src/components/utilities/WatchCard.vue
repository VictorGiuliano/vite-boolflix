<script>
export default {
    name: 'Card',
    props: {
        prod: Object
    },
    computed: {
        hasFlag() {
            const flags = ['it', 'en'];
            return flags.includes(this.prod.original_language);
        },
        srcFlags() {
            const url = new URL(`../../assets/img/${this.prod.original_language}.png`, import.meta.url);
            return url.href;

        }
    }
}
</script>
<template>
    <ul>
        <li>{{ prod.title || prod.name }}</li>
        <li>{{ prod.original_title || prod.original_name }}</li>
        <li>
            <img v-if="hasFlag" :src="srcFlags" :alt="prod.original_language">
            <div v-else>{{ prod.original_language }}</div>
        </li>
        <li>{{ prod.vote_average }}</li>
    </ul>
</template>
<style>

</style>