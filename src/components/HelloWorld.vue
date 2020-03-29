<template>
  <div class="">
    <h1 class="text-4xl">Your score is {{ $store.state.score }}</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    ...mapState(['score'])
  }
  
};
</script>
