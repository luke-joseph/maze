<template>
  <div class="flex">
    <button @click="resetGame" type="button"
    class="bg-orange-400 px-6 py-4 text-lg font-bold mx-auto">
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
