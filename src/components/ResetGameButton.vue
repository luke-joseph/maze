<template>
  <div class="flex">
    <button @click="resetGame" type="button"
    class="bg-red-400 text-red-900 uppercase px-6 py-4 text-lg font-bold mx-auto">
    <slot></slot>
  </button>
  </div>
</template>

<script>
export default {
  methods:{
    resetGame(){
        this.$store.dispatch("resetGame");
    }
  }
}
</script>
