<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store.js';

export default {
  data() {
    return {
      store,
      axios
    }
  },
  components: {
    AppHeader,
    AppMain,
  },
  created() {
  },
  methods: {

  }
}
</script>

<template>
  
  <AppMain />
  <AppHeader />
</template>

<style lang="scss">
@use './style/generals.scss'
</style>