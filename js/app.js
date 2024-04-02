import { books } from "./data.js"

const { createApp } = Vue;
createApp({
    data() {
        return {
            books,
        }
    },
    methods: {
        addToCart(id){
            /* event.preventDefault(); */
            const item = this.books.find((el) => { return el.id === id });
            item.soldout = !item.soldout;

        },
    },
    mounted() {
        console.log(books)
    }
}).mount('#app')