<template>
  <div class="pb-12 text-red-400">
    <h1 class="text-4xl text-center font-bold">You Defeated the Maze!</h1>

  <div id="completed-stats" class="mb-12">
    <p class="text-center mt-32 text-3xl">Congrats you beat the maze in:</p>
    <p class="text-center text-3xl">{{ completedTime }}</p>
  </div>

    <ResetGameButton>Play Again</ResetGameButton>
  </div>
</template>

<script>
import ResetGameButton from "@/components/ResetGameButton.vue";

export default {
  name: "GameComplete",
  components:{
    ResetGameButton
  },
  props: ['timer'],
  computed:{
    completedTime(){
      let minutes = this.timer.minutes ? this.timer.minutes : false;
      if (minutes) {
        if (minutes > 1) {
          return minutes + ' minutes & ' + this.timer.seconds + ' seconds';
        } else {
            return minutes + ' minute & ' + this.timer.seconds + ' seconds';
        }
      } else {
        return this.timer.seconds + ' seconds';
      }
    }
  }
}
</script>
