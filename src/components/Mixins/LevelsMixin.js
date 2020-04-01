export const LevelsMixin = {
  methods: {
    nextLevel() {
      this.$store.dispatch("updateLevel");
    },
    trackMouse($event) {
      if (
        $event.target.id == "lava" ||
        $event.target.id == "lava-out" ||
        $event.target.id == ""
      ) {
        this.$store.dispatch("gameOver");
      } else if ($event.target.id == "escaped") {
        this.nextLevel();
      }
    }
  }
};
