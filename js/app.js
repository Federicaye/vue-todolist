import { books } from "./data.js"

const { createApp } = Vue;
createApp({
    data() {
        return {
            books,
            cart: [],
            genre: ""
        }
    },
    methods: {
        addToCart(id) {
            /* event.preventDefault(); */
            const item = this.books.find((el) => { return el.id === id });
            item.soldout = !item.soldout;
            this.cart.push(item);
            console.log(this.cart);
            console.log(item)

        },
        removeItem(id) {
            const i = this.cart.findIndex((el) => el.id === id);
            const bookCart = this.books.find((el) => { return el.id === id });
            if (i !== -1) {
                this.cart.splice(i, 1);
                bookCart.soldout = !bookCart.soldout;
            }
        },
    },
    computed: {
        filteredBooks() {
            return this.books.filter((el) => {
                if (this.genre === "All") {
                    return true
                } else if (this.genre === "fantasy"){
                  return  el.genre === "Fantasy"
                } else if (this.genre === "romantic"){
                  return  el.genre === "Romantic Novel"
                } else {
                  return  el.genre === "Science Fiction"
                }
            })
        }

    },
    mounted() {
        console.log(books)
    }
}).mount('#app')