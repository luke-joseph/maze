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
</style>
