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
        removeItem(id) {
            const i = this.cart.findIndex((el) => el.id === id);
            if (i !== -1) {
                this.cart.splice(i, 1);
            }
        },
    },
    mounted() {
        console.log(books)
    }
}).mount('#app')