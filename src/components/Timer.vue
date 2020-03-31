<template>
  <div class="text-red-400">
    {{ formattedTime }}
  </div>
</template>

<script>
export default {
  name: "Timer",
  props: ['timer'],
  computed:{
    formattedTime(){
      let m;
      let s;

      this.timer.seconds < 10 ? s = "0" + this.timer.seconds
      : s = this.timer.seconds;

      this.timer.minutes < 10 ? m = "0" + this.timer.minutes
      : m = this.timer.minutes;

      return m + ":" + s;
      }
    }
  }
</script>
