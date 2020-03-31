export const LevelsMixin = {
  methods: {
    nextLevel() {
      this.$store.dispatch("updateLevel");
    },
    trackMouse($event) {
      console.log($event.target.id);
      if (
        $event.target.id == "lava" ||
        $event.target.id == "lava-out" ||
        $event.target.id == ""
      ) {
        console.log("restart game & reset state");
      } else if ($event.target.id == "escaped") {
        this.nextLevel();
      }
    }
  }
  // mounted(){
  //   const cursor = document.querySelector('.cursor');
  //
  //   console.log(cursor);
  //
  //   document.addEventListener('mousemove', e => {
  //     cursor.setAttribute("style", "top: "+ (e.pageY - 10) + "px; left: "+ (e.pageX - 10) +"px;");
  //   })
  // }
};
