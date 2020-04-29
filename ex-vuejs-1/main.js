
var vue = new Vue({
  el: "#app",
  data: {
    "name": "Eduardo",
    "lastName": "- kun"
  },
  computed: {
    fullName() {
      return this.name + " " + this.lastName;
    }
  }
});
