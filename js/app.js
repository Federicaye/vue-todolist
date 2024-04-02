import { books } from "./data.js"

const { createApp } = Vue;
createApp({
    data() {
        return {
            books,
            cart: []
        }
    },
    methods: {
        addToCart(id){
            /* event.preventDefault(); */
            const item = this.books.find((el) => { return el.id === id });
            item.soldout = !item.soldout;
            this.cart.push(item);
            console.log(this.cart);
            console.log(item)

        },
    },
    mounted() {
        console.log(books)
    }
}).mount('#app')