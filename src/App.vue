<script>
  export default {
    name: 'App',
    data () {
      return {
        navIsActive: false
      }
    },
    methods: {
      toggleNav () {
        this.navIsActive = !this.navIsActive
      }
    }
  }
</script>
<template>
  <div id="app">
    <a href="" id="logo">
      <img src="./assets/images/logo.svg" alt="logo" v-bind:class="{ hide: navIsActive }">
    </a>
    <div class="hamburger-menu" v-on:click="toggleNav" v-bind:class="{ active: navIsActive }">
      <span class="top"></span>
      <span class="middle"></span>
      <span class="bottom"></span>
    </div>
    <div id="nav-container" v-bind:class="{ open: navIsActive }">
      <nav>
        <ul>
          <li>
            <img src="./assets/images/github.svg" alt="Github">
            <a href="https://github.com/maxsilvauk" target="_blank">Github</a>
          </li>
          <li>
            <img src="./assets/images/behance.svg" alt="Behance">
            <a href="https://www.behance.net/bluecanvasdigital" target="_blank">Behance</a>
          </li>
          <li>
            <img src="./assets/images/medium.svg" alt="Medium">
            <a href="https://medium.com/@maxsilvauk" target="_blank">Medium</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="landing-container">
      <div class="landing-title">
        <h1>Stay tuned</h1>
        <p class="landing-subtitle">website launching soon</p>
      </div>
      <vue-particles
        color="#ffffff"
        :particleOpacity="0.1"
        linesColor="#FFF"
        :particlesNumber="120"
        shapeType="circle"
        :particleSize="3"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.8"
        :linesDistance="150"
        :moveSpeed="0.8"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div>
  </div>
</template>
<style lang="scss">
  @import 'src/assets/styles/_global.scss';
</style>
