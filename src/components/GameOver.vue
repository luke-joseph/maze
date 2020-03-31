<template>
  <div class="pb-12">
    <h1 class="text-4xl mb-12 text-center">MUHAHAHAHAHA YOU FAILED</h1>
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
