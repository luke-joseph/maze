<template>
  <div id="lava-out" class="pb-12" @mouseover="trackMouse($event)">

  <div id="lava" class="flex flex-col mx-auto" style="width:300px;">
    <div class="flex" style="height:130px;">
      <div id="progress-3" class="bg-blue-400" style="width:30px; height:130px;"></div>
      <div id="progress-2" class="bg-black" style="width:220px; height:50px"></div>
      <div id="progress-1" class="bg-black" style="width:50px; height:50px"></div>
    </div>
    <div class="flex" style="height:130px;">
      <div id="progress-4" class="bg-black" style="width:220px; height:50px"></div>
      <div id="progress-5" class="bg-black" style="width:270px; height:50px"></div>
      <div id="progress-6" class="bg-blue-400" style="width:30px; height:130px;"></div>
    </div>
    <div class="flex" style="height:130px;">
      <div id="progress-9" class="bg-blue-400" style="width:30px; height:130px;"></div>
      <div id="progress-8" class="bg-black" style="width:220px; height:50px"></div>
      <div id="progress-7" class="bg-black" style="width:50px; height:50px"></div>
    </div>
    <div class="flex" style="height:130px;">
      <div id="progress-10" class="bg-black" style="width:220px; height:50px"></div>
      <div id="progress-11" class="bg-black" style="width:270px; height:50px"></div>
      <div id="progress-12" class="bg-blue-400" style="width:30px; height:130px;"></div>
    </div>
    <div class="flex" style="height:130px;">
      <div id="escaped" class="bg-blue-400" style="width:30px; height:50px;"></div>
      <div id="progress-14" class="bg-black" style="width:220px; height:50px"></div>
      <div id="progress-13" class="bg-black" style="width:50px; height:50px"></div>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  name: "LevelTwo",
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
};
</script>
