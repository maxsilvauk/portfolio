<script>
  export default {
    name: 'App',
    data () {
      return {
        navIsActive: false
      }
    },
    methods: {
      toggleNav: () => {
      }
    }
  }
</script>
<template>
  <div id="app">
    <div class="wrap-banner">
      <div class="hamburger-menu" v-on:click="navIsActive = !navIsActive" v-bind:class="{ active: navIsActive }">
        <span class="top"></span>
        <span class="middle"></span>
        <span class="bottom"></span>
      </div>
      <div id="nav-fullscreen" v-bind:class="{ open: navIsActive }">
        <nav>
          <ul>
            <li>
              <img src="https://cdn.worldvectorlogo.com/logos/github-octocat.svg" alt="Octocat">
              <a href="https://github.com/maxsilvauk" target="_blank">Github</a>
            </li>
            <li>
              <img src="https://cdn.worldvectorlogo.com/logos/github-octocat.svg" alt="Octocat">
              <a href="https://github.com/maxsilvauk" target="_blank">Behance</a>
            </li>
            <li>
              <img src="https://cdn.worldvectorlogo.com/logos/github-octocat.svg" alt="Octocat">
              <a href="https://medium.com/@maxsilvauk" target="_blank">Medium</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="landing-title">
        <img src="./assets/logo.svg" alt="logo">
        <h1>Stay tuned</h1>
        <p class="landing-subtitle">website launching soon</p>
      </div>
      <vue-particles
        color="#ffffff"
        :particleOpacity="0.7"
        linesColor="#000D14"
        :particlesNumber="120"
        shapeType="circle"
        :particleSize="3"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="2"
        :linesDistance="150"
        :moveSpeed="3"
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
