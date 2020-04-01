<template>
  <div class="pb-12">
    <audio
      style="display: none"
      id="my-audio"
      ref="audio"
      :src="audio.src"
      preload="auto">
     </audio>
    <img class="w-full h-full mb-12" src="https://upload.wikimedia.org/wikipedia/commons/3/30/Zombie_underworld_evil_face.jpg" alt="scary zombie picture">
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
  data(){
    return{
      audio:{
        src: 'https://trackwire.s3.us-east-2.amazonaws.com/freelance/scarymaze/scream.mp3'
      }
    }
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
