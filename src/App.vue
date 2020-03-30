<template>
  <div id="app" class="h-screen">
    <NavBar></NavBar>
    <router-view class="container shadow-inner p-12 mx-auto h-full"/>
  </div>
</template>

<script>

import NavBar from "@/components/layouts/NavBar.vue";

export default{
  components: {
    NavBar
  }
}
</script>

<style >
  .router-link-exact-active{
    color: blue;
  }
  #lava-out{
    /* background: url("https://media.giphy.com/media/3oKIPaGG4PDQgQDFZe/giphy.gif") no-repeat;
    background-size: cover; */
  }
</style>
