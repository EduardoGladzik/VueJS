var vue = new Vue({
  el: "#app",
  data: {
    "quantity": 0
  },
  computed: {
  },
  methods: {
    add() {
      this.quantity++;
    },
    rem() {
      if(this.quantity > 0)
        this.quantity--;
    },
    zerar() {
      if(this.quantity > 0)
        this.quantity = 0;
    }
  }
});
