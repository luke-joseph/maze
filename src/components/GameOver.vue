<template>
  <div class="pb-12">
    <audio
      style="display: none"
      id="my-audio"
      ref="audio"
      src="@/assets/scream.mp3"
      preload="auto">
     </audio>
    <img class="w-full h-full mb-12" src="https://i.ytimg.com/vi/RNoHcWE8tbQ/maxresdefault.jpg" alt="scary zombie picture">
    <ResetGameButton>Play Again</ResetGameButton>
  </div>
</template>

<script>
import ResetGameButton from "@/components/ResetGameButton.vue";

export default {
  name: "GameOver",
  components:{
    ResetGameButton
  },
  methods:{
    startGame(){
      this.$store.dispatch('startGame');
    }
  },
  mounted(){
    this.$refs.audio.play();
  }
}
</script>
