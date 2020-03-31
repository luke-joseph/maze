<template>
  <div class="game border">
    <div v-if="level > 0 && level < 6" id="stats" class="flex mb-12 text-4xl justify-between w-1/2 mx-auto">
      <h1>Level {{ level }}</h1>
      <Timer :timer="timer" />
    </div>
    <Welcome v-if="level === 0" />
    <LevelOne v-if="level === 1" />
    <LevelTwo v-if="level === 2" />
    <LevelThree v-if="level === 3" />
    <LevelFour v-if="level === 4" />
    <LevelFive v-if="level === 5" />
    <GameComplete v-if="level === 6" />
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from "vuex";
import Welcome from "@/components/Welcome.vue";
import Timer from "@/components/Timer.vue";
import LevelOne from "@/components/LevelOne.vue";
import LevelTwo from "@/components/LevelTwo.vue";
import LevelThree from "@/components/LevelThree.vue";
import LevelFour from "@/components/LevelFour.vue";
import LevelFive from "@/components/LevelFive.vue";
import GameComplete from "@/components/GameComplete.vue";

export default {
  name: "Game",
  components: {
    Welcome,
    Timer,
    LevelOne,
    LevelTwo,
    LevelThree,
    LevelFour,
    LevelFive,
    GameComplete
  },
  computed: {
    ...mapState(["score", "level", "timer"])
  }
};
</script>

<style media="screen">
.cursor{
  width: 20px;
  height: 20px;
  border: 1px solid red;
  border-radius: 50%;
  position:absolute;
  /* background-color: red; */
}
.game{
  cursor: cell;
}
</style>
