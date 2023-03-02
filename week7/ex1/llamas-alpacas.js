const { createApp } = Vue

createApp({
    data() {
        return {
            llamaWiki: "https://en.wikipedia.org/wiki/Llama",
            alpacaWiki: "https://en.wikipedia.org/wiki/Alpaca",

        }
    }
}).mount('#myApp')