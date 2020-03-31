<template>
  <div class="pb-12">
    <h1 class="text-4xl mb-12 text-center text-red-400">Welcome to the Maze</h1>

  <div class="flex justify-center" >

    <div id="progress-1" class="w-1/3 bg-black text-white flex rounded-lg"
    @click="startGame"
    style="width:150px; height:50px; margin-right: 150px; margin-top: 450px;">

    <p class="m-auto font-bold uppercase cursor-pointer p-4 bg-red-400 text-white tracking-wider uppercase">
      Start Game
    </p>

    </div>

  </div>

  </div>
</template>

<script>
export default {
  name: "Welcome",
  methods:{
    startGame(){
      this.$store.dispatch('startGame');
    }
  }
}
</script>
