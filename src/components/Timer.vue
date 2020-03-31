<template>
  <div class="">
    Timerrr {{ timer.minutes }}:{{ timer.seconds }}
  </div>
</template>

<script>
export default {
  props: ['timer']
}
</script>
