<template>
  <div class="text-center about text-grey-300 w-1/2">
    <h1 class="text-3xl font-bold tracking-wide mb-12">About The Scary Maze</h1>
    <p class="mb-4 text-grey-500 text-xl">This game was made with Vue & Vuex by <a class="text-red-300 underline hover:text-red-400" href="https://lukejoseph.dev">Luke Joseph</a></p>
    <p class="mb-4 text-grey-500 text-xl">To see the code for this game visit the <a class="text-red-300 underline hover:text-red-400" href="https://github.com/luke-joseph/maze">github repo</a></p>
  </div>
</template>

<script>
export default {
  mounted() {
    // Reset the game...
    this.$store.dispatch("resetGame");
  }
};
</script>
