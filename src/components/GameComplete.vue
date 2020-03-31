<template>
  <div class="pb-12">
    <h1 class="text-4xl text-center font-bold">You Defeated the Maze!</h1>

    <p class="text-center mt-32 text-3xl">Congrats you beat the maze in:</p>
    <p class="text-center text-3xl">{{ completedTime }}</p>
  </div>
</template>

<script>
export default {
  name: "GameComplete",
  props: ['timer'],
  computed:{
    completedTime(){
      let minutes = this.timer.minutes ? this.timer.minutes : false;
      if (minutes) {
        return minutes + ' mins ' + this.timer.seconds + ' seconds';
      } else {
        return this.timer.seconds + ' seconds';
      }
    }
  }
}
</script>
