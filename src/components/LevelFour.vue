<template>
  <div id="lava-out" class="pb-12" @mouseover="trackMouse($event)">

  <div id="lava" class="flex flex-col mx-auto" style="width:300px;">
    <div class="flex" style="height:130px;">
      <div id="progress-4" class="bg-blue-400" style="width:20px; height:130px;"></div>
      <div id="progress-3" class="bg-black" style="width:75px; height:20px;"></div>
      <div id="progress-2" class="bg-black h-full" style="width:110px; height:20px;"></div>
      <div id="progress-1" class="bg-black" style="width:30px; height:20px;"></div>
    </div>
    <div class="flex" style="height:100px;">
      <div id="progress-5" class="bg-blue-400" style="width: 20px; height:20px;"></div>
      <div id="progress-6" class="bg-black" style="width:20px; height:20px;"></div>
      <div id="progress-7" class="bg-blue-400" style="width:20px; height:20px;"></div>
      <div id="progress-8" class="bg-black" style="width: 20px; height: 20px;"></div>
      <div id="progress-9" class="bg-blue-400" style="width:20px; height: 20px;"></div>
      <div id="progress-10" class="bg-black" style="width:20px; height:20px;"></div>
      <div id="progress-10" class="bg-blue-400" style="width:20px; height:20px;"></div>
      <div id="progress-12" class="bg-black" style="width:20px; height:20px;"></div>
      <div id="progress-13" class="bg-blue-400" style="width:20px; height:20px;"></div>
      <div id="progress-14" class="bg-black" style="width:20px; height:20px;"></div>
      <div id="progress-15" class="bg-blue-400" style="width:20px; height:20px;"></div>
      <div id="progress-16" class="bg-black" style="width:20px; height:20px"></div>
      <div id="progress-17" class="bg-blue-400" style="width:25px; height:100px;"></div>
    </div>
    <div class="flex" style="height:50px;">
      <div id="progress-20" class="bg-blue-400" style="width:30px; height:50px; margin-left:40px;"></div>
      <div id="progress-19" class="bg-black" style="width:80px; height:20px"></div>
      <div id="progress-18" class="bg-black" style="width:115px;  height:20px;"></div>
    </div>
    <div class="flex" style="height:60px;">
      <div id="progress-21" class="bg-blue-400" style="width:30px; height:20px; margin-left: 40px;"></div>
      <div id="progress-22" class="bg-black" style="width:50px; height:20px;"></div>
      <div id="progress-23" class="bg-grey-700" style="width:65px; height:20px"></div>
      <div id="progress-24" class="bg-grey-700" style="width:20px; height:60px"></div>
    </div>
    <div class="flex" style="height:130px;">
      <div id="progress-26" class="bg-black" style="width:20px; height:130px; margin-left: 125px;"></div>
      <div id="progress-25" class="bg-blue-400" style="width:60px; height:20px;"></div>
    </div>
    <div class="flex" style="height:90px;">
      <div id="escaped" class="bg-blue-400" style="width:20px; height:50px; margin-left: 125px;"></div>
    </div>
  </div>

  </div>
</template>

<script>
import {LevelsMixin} from "@/components/Mixins/LevelsMixin.js";

export default {
  name: "LevelFour",
  mixins: [LevelsMixin],
};
</script>
