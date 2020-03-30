<template>
  <div id="lava-out" class="border pb-12" @mouseover="trackMouse($event)">
    <h1 class="text-4xl mb-12 text-center">Level {{ level }}</h1>

  <div id="lava" class="flex flex-col mx-auto" style="width:300px;">
    <div class="flex" style="height:130px;">
      <div id="progress-22" class="bg-blue-400" style="width:20px; height:130px;"></div>
      <div id="progress-23" class="bg-black" style="width:75px; height:20px;"></div>
      <div id="progress-24" class="bg-blue-400" style="width:20px; height:90px;"></div>
      <div id="progress-25" class="bg-black h-full" style="width:70px; height:20px; margin-top: 70px;"></div>
      <div id="progress-26" class="bg-blue-400" style="width:20px; height:90px;"></div>
      <div id="escaped" class="bg-black" style="width:30px; height:20px;"></div>
    </div>
    <div class="flex" style="height:130px;">
      <!-- <div id="progress-14" class="bg-black mt-auto" style="width:160px; height:10px;"></div> -->
      <div id="progress-21" class="bg-blue-400 h-full" style="width: 20px;"></div>
      <div id="progress-20" class="bg-black mt-auto" style="width:20px; height:20px;"></div>
      <div id="progress-19" class="bg-blue-400 h-full" style="width:20px;"></div>
      <div id="progress-18" class="bg-black mb-auto" style="width: 20px; height: 20px;"></div>
      <div id="progress-17" class="bg-blue-400 h-full" style="width:20px;"></div>
      <div id="progress-16" class="bg-black mt-auto" style="width:20px; height:20px;"></div>
      <div id="progress-15" class="bg-blue-400 h-full" style="width:20px;"></div>
      <div id="progress-14" class="bg-black mb-auto" style="width:20px; height:20px;"></div>
      <div id="progress-13" class="bg-blue-400 h-full" style="width:20px;"></div>
      <div id="progress-12" class="bg-black mt-auto" style="width:20px; height:20px;"></div>
      <div id="progress-11" class="bg-blue-400 h-full" style="width:20px;"></div>
      <div id="progress-10" class="bg-black" style="width:20px; height:20px"></div>
      <div id="progress-9" class="bg-blue-400" style="width:25px; height:130px;"></div>
    </div>
    <div class="flex" style="height:130px;">
      <div id="progress-8" class="bg-blue-400 mt-auto" style="width:30px; height:50px;"></div>
      <div id="progress-7" class="bg-black mt-auto" style="width:120px; height:50px"></div>
      <div id="progress-6" class="bg-black mt-auto" style="width:50px; height:50px"></div>
      <div id="progress-5" class="bg-black mt-auto h-full" style="width:25px; margin-left: 40px;"></div>
    </div>
    <div class="flex" style="height:130px;">
      <!-- <div id="progress-5" class="bg-black" style="width:220px; height:50px"></div>
      <div id="progress-4" class="bg-black" style="width:270px; height:50px"></div> -->
      <div id="progress-2" class="bg-blue-400" style="width:30px; height:130px;"></div>
      <div id="progress-3" class="bg-black" style="width:50px; height:40px; margin-left: 120px;"></div>
      <div id="progress-4" class="bg-grey-700" style="width:65px; height:40px"></div>
    </div>
    <div class="flex" style="height:130px;">
      <div id="progress-1" class="bg-blue-400" style="width:30px; height:50px;"></div>
      <!-- <div id="progress-2" class="bg-black" style="width:270px; height:50px"></div> -->
      <!-- <div id="progress-3" class="bg-blue-400" style="width:50px; height:50px"></div> -->
    </div>
  </div>

  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "LevelThree",
  methods:{
    nextLevel(){
      this.$store.dispatch('updateLevel');
    },
    trackMouse($event){
      if ($event.target.id == 'lava' || $event.target.id == 'lava-out') {

        console.log('reset the game');

      } else if ($event.target.id == 'escaped') {
        this.nextLevel();
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
