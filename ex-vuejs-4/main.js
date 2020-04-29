var vue = new Vue({
    el: "#app",
    data: {
      "name": "Eduardo",
      "grade1": 8,
      "grade2": 9.5,
      "status": true
    },
    computed: {
      avarage() {
        return (this.grade1 + this.grade2)/2;
      }
    },
    methods: {

    }
});
