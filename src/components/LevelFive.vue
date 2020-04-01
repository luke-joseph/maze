<template>
  <div id="lava-out" class="py-12" @mouseover="trackMouse($event)">

  <div id="lava" class="flex flex-col mx-auto" style="width:300px;">
    <div class="flex" style="height:20px;">
      <div id="escaped" class="bg-grey-400 mt-auto" style="width:20px; height:20px; margin-left:190px;"></div>
    </div>
    <div class="flex" style="height:40px;">
      <div id="progress-32" class="bg-grey-500 mt-auto" style="width:20px; height:20px; margin-left:170px;"></div>
      <div id="progress-33" class="bg-grey-500" style="width:20px; height:40px;"></div>
    </div>
    <div class="flex" style="height:60px;">
      <div id="progress-31" class="bg-grey-500" style="width:20px; height:40px; margin-left:170px;"></div>
      <div id="progress-30" class="bg-grey-500 mt-auto" style="width:20px; height:40px;"></div>
    </div>
    <div class="flex" style="height:80px;">
      <div id="progress-26" class="bg-grey-500 mt-auto" style="width:20px; height:40px; margin-left:110px;"></div>
      <div id="progress-27" class="bg-grey-500" style="width:40px; height:20px; margin-top:40px;"></div>
      <div id="progress-28" class="bg-grey-500" style="width:20px; height:60px;"></div>
      <div id="progress-29" class="bg-grey-500" style="width:20px; height:20px;"></div>
    </div>
    <div class="flex" style="height:40px;">
      <div id="progress-24" class="bg-grey-500" style="width:20px; height:40px; margin-left:20px;"></div>
      <div id="progress-25" class="bg-grey-500 h-full" style="width:90px; height:20px;"></div>
    </div>
    <div class="flex" style="height:80px;">
      <div id="progress-23" class="bg-grey-500" style="width:20px; height:20px; margin-left:20px;"></div>
      <div id="progress-22" class="bg-grey-500" style="width:20px; height:20px;"></div>
      <div id="progress-21" class="bg-grey-500" style="width: 20px; height: 40px;"></div>
      <div id="progress-20" class="bg-grey-500" style="width:20px; height: 40px; margin-top:20px;"></div>
      <div id="progress-19" class="bg-grey-500 mt-auto" style="width:20px; height:40px;"></div>
      <div id="progress-18" class="bg-grey-500 mt-auto" style="width:20px; height:20px;"></div>
      <div id="progress-17" class="bg-grey-500" style="width:20px; height:40px; margin-top:40px;"></div>
      <div id="progress-16" class="bg-grey-500" style="width:70px; height:20px; margin-top: 40px;"></div>
      <div id="progress-15" class="bg-grey-500 mt-auto" style="width:20px; height:40px;"></div>
    </div>
    <div class="flex" style="height:50px;">
      <div id="progress-9" class="bg-grey-500 mt-auto" style="width:20px; height:20px; margin-left:50px;"></div>
      <div id="progress-10" class="bg-grey-500 mt-auto" style="width:80px; height:20px"></div>
      <div id="progress-11" class="bg-grey-500 mt-auto" style="width:20px;  height:40px;"></div>
      <div id="progress-12" class="bg-grey-500" style="width:30px;  height:20px; margin-top: 10px;"></div>
      <div id="progress-13" class="bg-grey-500" style="width:20px;  height:30px;"></div>
      <div id="progress-14" class="bg-grey-500" style="width:30px;  height:20px;"></div>
    </div>
    <div class="flex" style="height:50px;">
      <div id="progress-8" class="bg-grey-500 mt-auto" style="width:20px; height:50px; margin-left: 50px;"></div>
      <div id="progress-7" class="bg-grey-500 mt-auto" style="width:50px; height:20px;"></div>
      <div id="progress-6" class="bg-grey-500 mt-auto" style="width:145px; height:20px"></div>
      <div id="progress-5" class="bg-grey-500 mt-auto" style="width:20px; height:20px"></div>
    </div>
    <div class="flex" style="height:50px;">
      <div id="progress-1" class="bg-grey-500 mt-auto" style="width:20px; height:20px; margin-left: 125px;"></div>
      <div id="progress-2" class="bg-grey-500 mt-auto" style="width:60px; height:20px;"></div>
      <div id="progress-3" class="bg-grey-500 mt-auto" style="width:60px; height:20px;"></div>
      <div id="progress-4" class="bg-grey-500 mt-auto" style="width:20px; height: 100%;"></div>
    </div>
    <div class="flex" style="height:90px;">
      <div id="progress-0" class="bg-grey-500" style="width:20px; height:50px; margin-left: 125px;"></div>
    </div>
  </div>

  </div>
</template>

<script>
import {LevelsMixin} from "@/components/Mixins/LevelsMixin.js";

export default {
  name: "LevelFive",
  mixins: [LevelsMixin],
};
</script>
