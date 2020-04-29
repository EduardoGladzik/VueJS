var app = new Vue ({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        selectedVariant: 0,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],

        variants: [
          {
            variantId: 2234,
            variantColor: "Green",
            variantImage: './assets/green-socks.jpg',
            variantQuantity: 10
          },
          {
            variantId: 2235,
            variantColor: "Blue",
            variantImage: './assets/blue-socks.jpg',
            variantQuantity: 0
          }
        ],

        variants2: [
          {
            variant2Id: 2236,
            variant2Type: "Long barrel"
          },
          {
            variant2Id: 2237,
            variant2Type: "Short barrel"
          }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
          this.cart += 1
        },
        removeFromCart() {
          this.cart -= 1
        },
        updateProduct(index) {
          this.selectedVariant = index
          console.log(index)
        }
    },
    computed: {
      title() {
        return this.brand + " " + this.product
      },
      image() {
        return this.variants[this.selectedVariant].variantImage
      },
      inStock() {
        return this.variants[this.selectedVariant].variantQuantity
      },
    }
})
