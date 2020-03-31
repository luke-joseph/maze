<template>
  <div class="">
    {{ timer.minutes }}:{{ timer.seconds }}
  </div>
</template>

<script>
export default {
  props: ['timer']
}
</script>
