<template>
  <div id="lava-out" class="pb-12" @mouseover="trackMouse($event)">

  <div id="lava" class="flex justify-center" >
    <div id="progress-1" class="bg-black" style="width:150px; height:500px;"></div>
    <div id="progress-2" class="bg-black" style="width:100px; height:50px"></div>
    <div id="escaped" class="bg-grey-400" style="width:50px; height:50px"></div>
  </div>

  </div>
</template>

<script>
export default {
  name: "LevelOne",
  methods:{
    nextLevel(){
      this.$store.dispatch('updateLevel');
    },
    trackMouse($event){
      if ($event.target.id == 'lava' || $event.target.id == 'lava-out') {

        console.log('restart game & reset state');

      } else if ($event.target.id == 'escaped') {

        this.nextLevel();

      }
      console.log($event.target.id)
    }
  }
};
</script>
