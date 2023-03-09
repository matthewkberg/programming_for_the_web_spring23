const { createApp } = Vue

createApp ({
    data() {
        return {
            firstNum: null,
            secondNum: null,
            operation: 'add',
            total: null
        }
    }
}).mount('#myApp')