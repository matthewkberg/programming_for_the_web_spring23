const { createApp } = Vue

createApp ({
    data() {
        return {
            firstName: '',
            lastName: '',
            street: '',
            city: '',
            country: '',
            colors: [],
            status: ''

        }
    }
}).mount('#myApp')