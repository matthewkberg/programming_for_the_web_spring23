const { createApp } = Vue

createApp({
    data() {
        return {
            // Wiki links
            llamaWiki: "https://en.wikipedia.org/wiki/Llama",
            alpacaWiki: "https://en.wikipedia.org/wiki/Alpaca",

        }
    }
}).mount('#myApp')