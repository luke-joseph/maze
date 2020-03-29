<template>
  <div class="game">
    <Welcome v-if="level === 0" />
    <LevelOne v-if="level === 1" />
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex';
import Welcome from "@/components/Welcome.vue";
import LevelOne from "@/components/LevelOne.vue";

export default {
  name: "Game",
  components: {
    LevelOne, Welcome
  },
  computed: {
    ...mapState(['score', 'level'])
  },
};
</script>
