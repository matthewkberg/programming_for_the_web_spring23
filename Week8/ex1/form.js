const { createApp } = Vue

createApp ({
    data() {
        return {
            firstName: '',
            lastName: '',
            street: '',
            city: '',
            state: '',
            country: '',
            colors: [],
            status: ''

        }
    }
}).mount('#myApp')