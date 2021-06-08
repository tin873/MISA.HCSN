<template>
  <div id="app">
    <Navbar @toggleMenu="toggleMenu"/>
    <Header />
    <Content v-bind:isToggleContent="isToggleContent"/>
  </div>
</template>
<script>
import Navbar from './components/layouts/Navbar.vue';
import Header from './components/layouts/Header.vue';
import Content from './components/layouts/Content.vue';

export default ({
  name: "App",
  data(){
    return{
      isToggleContent: false
    }
  },
  components: {
    Navbar,
    Header,
    Content
  },
  methods: {
    toggleMenu(){
      this.isToggleContent = !this.isToggleContent;
    }
  }
})
</script>

<style>
@import "./styles/index.css";
</style>

