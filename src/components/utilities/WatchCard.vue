<script>
import { poster, placeholder } from '../../data/index';
export default {
    name: "Card",
    data() {
        return {
            poster, placeholder
        };
    },
    props: {
        prod: Object
    },
    computed: {
        hasFlag() {
            const flags = ["it", "en"];
            return flags.includes(this.prod.original_language);
        },
        srcFlags() {
            const url = new URL(`../../assets/img/${this.prod.original_language}.png`, import.meta.url);
            return url.href;
        },
        posterUrl() {
            let posterUrl = "";
            if (this.prod.poster_path) {
                posterUrl = poster + this.prod.poster_path;
                return posterUrl;
            } else {
                return placeholder;
            }
        },
        vote() {
            return Math.floor(this.prod.vote_average / 2);
        }
    },

}
</script>
<template>
    <div class="card">
        <img class="poster" :src="posterUrl" :alt="prod.original_name">

        <ul class="overlay">
            <li>{{ prod.title || prod.name }}</li>
            <li>{{ prod.original_title || prod.original_name }}</li>
            <li>
                <img v-if="hasFlag" :src="srcFlags" :alt="prod.original_language">
                <div v-else>{{ prod.original_language }}</div>
            </li>
            <li>
                <i v-for="n in 5" :class="n <= this.vote ? 'fa-solid' : 'fa-regular'" class="fa-star"></i>
            </li>
        </ul>

    </div>
</template>
<style lang="scss" scoped>
@use '../../assets/scss/partials/mixin' as *;
@use '../../assets/scss/style.scss' as *;

.container-card {
    max-width: 150px;
    margin: 0 auto;
}

.card {
    width: 200px;
    flex-basis: calc(100% /5);
    position: relative;
    cursor: pointer;

    ul {
        visibility: hidden;
    }
}

.card:hover {

    ul {
        color: white;
        visibility: visible;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        li {

            img {
                width: 50px;
            }
        }


    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 1);
    }
}

.poster {
    height: 100%;
    width: 100%;
}
</style>