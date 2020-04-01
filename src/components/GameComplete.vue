<template>
  <div class="pb-12 text-red-400">
    <h1 class="text-4xl text-center font-bold mb-16">You Defeated the Maze!</h1>

  <div id="completed-stats" class="mb-12">
    <p class="text-center text-3xl">Congrats you beat the maze in:</p>
    <p class="text-center text-3xl mb-8">{{ completedTime }}</p>
    <div class="flex items-center">
      <span :class="MedalStyle" class="rounded-full w-5 h-5 mr-2 ml-auto"></span>
      <span :class="MedalText" class="text-3xl mr-auto">You got the {{ medal }} medal</span>
    </div>

  </div>

  <div class="mb-12 bg-grey-700 w-1/3 py-8 mx-auto">
    <p class="text-center mb-4 text-2xl text-yellow-400">Gold = Under 30 seconds</p>
    <p class="text-center mb-4 text-2xl text-grey-400">Silver = Under 50 seconds</p>
    <p class="text-center mb-4 text-2xl text-orange-400">Bronze = Over 50 seconds</p>
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
  data(){
    return{
      gold: 30,
      bronze: 50
    }
  },
  computed:{
    completedTime() {
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
    },
    medal() {
      if (this.timer.minutes >= 1 || this.timer.seconds > this.bronze ) {
        return 'bronze';
      } else if (this.timer.seconds > 30) {
        return 'silver';
      } else {
        return 'gold';
      }
    },
    MedalStyle() {
      return {
        'bg-orange-400': this.medal === 'bronze',
        'bg-grey-400': this.medal === 'silver',
        'bg-yellow-400': this.medal === 'gold',
      }
  },
  MedalText() {
    return {
      'text-orange-400': this.medal === 'bronze',
      'text-grey-400': this.medal === 'silver',
      'text-yellow-400': this.medal === 'gold',
    }
   },
  }
}
</script>
