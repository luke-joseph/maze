<template>
  <div id="lava-out" class="border pb-12" @mouseover="trackMouse($event)">
    <h1 class="text-4xl mb-12 text-center">Level {{ level }}</h1>

  <div id="lava" class="flex flex-col mx-auto" style="width:300px;">
    <div class="flex" style="height:20px;">
      <div id="escaped" class="bg-blue-400 mt-auto" style="width:20px; height:20px; margin-left:190px;"></div>
    </div>
    <div class="flex" style="height:40px;">
      <div id="progress-25e" class="bg-black mt-auto" style="width:20px; height:20px; margin-left:170px;"></div>
      <div id="progress-25f" class="bg-black" style="width:20px; height:40px;"></div>
    </div>
    <div class="flex" style="height:60px;">
      <div id="progress-25e" class="bg-black" style="width:20px; height:40px; margin-left:170px;"></div>
      <div id="progress-25f" class="bg-black mt-auto" style="width:20px; height:40px;"></div>
    </div>
    <div class="flex" style="height:80px;">
      <div id="progress-22e" class="bg-blue-400 mt-auto" style="width:20px; height:40px; margin-left:110px;"></div>
      <div id="progress-25e" class="bg-black" style="width:40px; height:20px; margin-top:40px;"></div>
      <div id="progress-25e" class="bg-black" style="width:20px; height:60px;"></div>
      <div id="progress-25f" class="bg-blue-400" style="width:20px; height:20px;"></div>
    </div>
    <div class="flex" style="height:40px;">
      <div id="progress-22" class="bg-blue-400" style="width:20px; height:40px; margin-left:20px;"></div>
      <div id="progress-25" class="bg-black h-full" style="width:90px; height:20px;"></div>
    </div>
    <div class="flex" style="height:80px;">
      <!-- <div id="progress-14" class="bg-black mt-auto" style="width:160px; height:10px;"></div> -->
      <div id="progress-20" class="bg-black" style="width:20px; height:20px; margin-left:20px;"></div>
      <div id="progress-19" class="bg-blue-400" style="width:20px; height:20px;"></div>
      <div id="progress-18" class="bg-black" style="width: 20px; height: 40px;"></div>
      <div id="progress-17" class="bg-blue-400" style="width:20px; height: 40px; margin-top:20px;"></div>
      <div id="progress-16" class="bg-black mt-auto" style="width:20px; height:40px;"></div>
      <div id="progress-15" class="bg-blue-400 mt-auto" style="width:20px; height:20px;"></div>
      <div id="progress-14" class="bg-black" style="width:20px; height:40px; margin-top:40px;"></div>
      <!-- <div id="progress-13" class="bg-blue-400" style="width:20px; height:20px;"></div> -->
      <!-- <div id="progress-12" class="bg-black" style="width:25px; height:20px;"></div> -->
      <div id="progress-11" class="bg-blue-400" style="width:70px; height:20px; margin-top: 40px;"></div>
      <div id="progress-9" class="bg-blue-400 mt-auto" style="width:20px; height:40px;"></div>
    </div>
    <div class="flex" style="height:50px;">
      <div id="progress-8" class="bg-blue-400 mt-auto" style="width:20px; height:20px; margin-left:50px;"></div>
      <div id="progress-7" class="bg-black mt-auto" style="width:80px; height:20px"></div>
      <div id="progress-5s" class="bg-black mt-auto" style="width:20px;  height:40px;"></div>
      <div id="progress-5w" class="bg-black" style="width:30px;  height:20px; margin-top: 10px;"></div>
      <div id="progress-5e" class="bg-black" style="width:20px;  height:30px;"></div>
      <div id="progress-5f" class="bg-black" style="width:30px;  height:20px;"></div>
    </div>
    <div class="flex" style="height:50px;">
      <div id="progress-2" class="bg-blue-400 mt-auto" style="width:20px; height:50px; margin-left: 50px;"></div>
      <div id="progress-3" class="bg-black mt-auto" style="width:50px; height:20px;"></div>
      <div id="progress-4" class="bg-grey-700 mt-auto" style="width:145px; height:20px"></div>
      <div id="progress-49" class="bg-grey-700 mt-auto" style="width:20px; height:20px"></div>
    </div>
    <div class="flex" style="height:50px;">
      <div id="progress-14" class="bg-black mt-auto" style="width:20px; height:20px; margin-left: 125px;"></div>
      <div id="progress-44" class="bg-blue-400 mt-auto" style="width:60px; height:20px;"></div>
      <div id="progress-44" class="bg-black mt-auto" style="width:60px; height:20px;"></div>
      <div id="progress-44" class="bg-black mt-auto" style="width:20px; height: 100%;"></div>
    </div>
    <div class="flex" style="height:90px;">
      <div id="progress-0" class="bg-blue-400" style="width:20px; height:50px; margin-left: 125px;"></div>
    </div>
  </div>

  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "LevelFive",
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
