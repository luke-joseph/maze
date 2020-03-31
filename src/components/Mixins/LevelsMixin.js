export const LevelsMixin = {
  mounted() {
    console.log("hello from the mixin");
  },
  methods: {
    nextLevel() {
      this.$store.dispatch("updateLevel");
    },
    trackMouse($event) {
      if ($event.target.id == "lava" || $event.target.id == "lava-out") {
        console.log("restart game & reset state");
      } else if ($event.target.id == "escaped") {
        this.nextLevel();
      }
      console.log($event.target.id);
    }
  }
};
