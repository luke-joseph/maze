<template>
  <div class="game">
    <Welcome v-if="level === 0" />
    <LevelOne v-if="level === 1" />
    <LevelTwo v-if="level === 2" />
    <LevelThree v-if="level === 3" />
    <GameComplete v-if="level === 4" />
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex';
import Welcome from "@/components/Welcome.vue";
import LevelOne from "@/components/LevelOne.vue";
import LevelTwo from "@/components/LevelTwo.vue";
import LevelThree from "@/components/LevelThree.vue";
import GameComplete from "@/components/GameComplete.vue";

export default {
  name: "Game",
  components: {
    Welcome, LevelOne, LevelTwo, LevelThree, GameComplete
  },
  computed: {
    ...mapState(['score', 'level'])
  },
};
</script>
