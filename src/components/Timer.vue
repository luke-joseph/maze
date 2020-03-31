<template>
  <div class="">
    {{ timer.minutes }}:{{ timer.seconds }}
  </div>
</template>

<script>
export default {
  name: "Timer",
  props: ['timer']
}
</script>
