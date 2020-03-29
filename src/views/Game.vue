<template>
  <div class="game">
    <Welcome v-if="level === 0" />
    <LevelOne v-if="level === 1" />
    <LevelTwo v-if="level === 2" />
    <GameComplete v-if="level === 3" />
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex';
import Welcome from "@/components/Welcome.vue";
import LevelOne from "@/components/LevelOne.vue";
import LevelTwo from "@/components/LevelTwo.vue";
import GameComplete from "@/components/GameComplete.vue";

export default {
  name: "Game",
  components: {
    LevelOne, Welcome, LevelTwo, GameComplete
  },
  computed: {
    ...mapState(['score', 'level'])
  },
};
</script>
