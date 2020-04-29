var vue = new Vue({
  el: "#app",
  data: {
    name: "Eduardo"
  },
  computed: {
  },
  methods: {
    sendMSG() {
      console.log("aí sim " + this.name + "... hello vue. BALASSO");
      alert("aí sim " + this.name + "... hello vue. BALASSO");
    }
  }
});
