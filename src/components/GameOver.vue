<template>
  <div class="pb-12">
    <img class="w-full h-full mb-12" src="https://upload.wikimedia.org/wikipedia/commons/3/30/Zombie_underworld_evil_face.jpg" alt="">
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
  }
}
</script>
