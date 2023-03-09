const { createApp } = Vue

createApp ({
    data() {
        return {
            firstNum: null,
            secondNum: null,
            operation: 'add',
            total: null
        }
    },
    methods: {
        calculate: (num1, num2) {
            
        }
    }
}).mount('#myApp')