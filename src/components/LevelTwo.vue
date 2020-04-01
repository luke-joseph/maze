<template>
  <div id="lava-out" class="py-12" @mouseover="trackMouse($event)">

  <div id="lava" class="flex flex-col mx-auto" style="width:300px;">
    <div class="flex" style="height:130px;">
      <div id="progress-3" class="bg-grey-500" style="width:30px; height:130px;"></div>
      <div id="progress-2" class="bg-grey-500" style="width:220px; height:50px"></div>
      <div id="progress-1" class="bg-grey-500" style="width:50px; height:50px"></div>
    </div>
    <div class="flex" style="height:130px;">
      <div id="progress-4" class="bg-grey-500" style="width:220px; height:50px"></div>
      <div id="progress-5" class="bg-grey-500" style="width:270px; height:50px"></div>
      <div id="progress-6" class="bg-grey-500" style="width:30px; height:130px;"></div>
    </div>
    <div class="flex" style="height:130px;">
      <div id="progress-9" class="bg-grey-500" style="width:30px; height:130px;"></div>
      <div id="progress-8" class="bg-grey-500" style="width:220px; height:50px"></div>
      <div id="progress-7" class="bg-grey-500" style="width:50px; height:50px"></div>
    </div>
    <div class="flex" style="height:130px;">
      <div id="progress-10" class="bg-grey-500" style="width:220px; height:50px"></div>
      <div id="progress-11" class="bg-grey-500" style="width:270px; height:50px"></div>
      <div id="progress-12" class="bg-grey-500" style="width:30px; height:130px;"></div>
    </div>
    <div class="flex" style="height:130px;">
      <div id="escaped" class="bg-grey-400" style="width:30px; height:50px;"></div>
      <div id="progress-14" class="bg-grey-500" style="width:220px; height:50px"></div>
      <div id="progress-13" class="bg-grey-500" style="width:50px; height:50px"></div>
    </div>
  </div>

  </div>
</template>

<script>
import {LevelsMixin} from "@/components/Mixins/LevelsMixin.js";

export default {
  name: "LevelTwo",
  mixins: [LevelsMixin],
};
</script>
