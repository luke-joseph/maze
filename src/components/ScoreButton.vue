<template>
 <div class="">
   <button @click="incrementScore" type="button" name="button" class="bg-red-100 p-4 rounded uppercase text-sm font-bold">Increase Score</button>
 </div>
</template>

<script>
export default {
  name: "ScoreButton",
  data(){
    return{
      incrementBy: 10,
    }
  },
  methods:{
    incrementScore(){
      // mutate the score
      this.$store.dispatch('updateScore', this.incrementBy);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
