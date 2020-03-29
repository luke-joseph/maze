<template>
  <div id="lava-out" class="border pb-12" @mouseover="trackMouse($event)">
    <h1 class="text-4xl mb-12 text-center">Level {{ level }}</h1>

  <div id="lava" class="flex justify-center" >
    <div id="progress-1" class="w-1/3 bg-black" style="width:150px; height:500px;"></div>
    <div id="progress-2" class="w-1/3 bg-black" style="width:100px; height:50px"></div>
    <div id="escaped" class="w-1/3 bg-grey-400" style="width:50px; height:50px"></div>
  </div>

  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "LevelOne",
  methods:{

    mouseOver(){
      console.log('hovering');
    },

    mouseOut(){
      console.log('left hover');
    },

    trackMouse($event){
      if ($event.target.id == 'lava' || $event.target.id == 'lava-out') {

        console.log('restart game & reset state');

      } else if ($event.target.id == 'escaped') {
        console.log('increase level and show new level');
      }
      console.log($event.target.id)
    }
  },
  computed: {
    ...mapState(['score', 'level'])
  },
  mounted(){

  }

};
</script>
