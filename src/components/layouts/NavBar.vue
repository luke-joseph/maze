<template>
  <div id="large-nav" class="hidden sm:flex items-center border-t-4 border-red-400 leading-loose tracking-wide text-base shadow">
   <div class="container mx-auto flex items-center justify-between">

     <nav class="hidden sm:flex mx-auto">
        <ul class="mx-auto flex">
         <div class="flex pt-2 pb-2">
           <router-link to="/" class="home tracking-wider pr-4 hover:no-underline text-lg">Home</router-link>
           <router-link to="/about" class="tracks tracking-wider pr-4 hover:no-underline text-lg">About</router-link>
         </div>
        </ul>
     </nav>

   </div>
</div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style lang="css" scoped>
</style>
