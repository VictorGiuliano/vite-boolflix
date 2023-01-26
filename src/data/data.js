import { reactive } from 'vue';
const apk = 'e6e673e2f8e14a5ac478f8be0f0b4361';
export const datiUpi = reactive({
    filmUri: `https://api.themoviedb.org/3/search/movie/?api_key=${apk}&query=avatar&page=1&language=IT-it`,
    tvUri: `https://api.themoviedb.org/3/search/tv/?api_key=${apk}&query=avatar&page=1&language=IT-it`
});