/* eslint-disable */
import particles from './vue-particles.vue'

const Home = {

    install (Vue, options) {
        Vue.component('vue-particles', particles);
    }

}

export default Home