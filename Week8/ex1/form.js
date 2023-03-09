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
            colors: [
                {name: 'Snow', value: 'snow'},
                {name: 'Pumpkin', value: 'pumpkin'},
                {name: 'Coal', value: 'coal'},
                {name: 'Toast', value: 'toast'},
                {name: 'Pickle Green', value: 'pickle-green'},
                {name: 'Rainbow', value: 'rainbow'},
                {name: 'Smoke', value: 'smoke'},
                {name: 'Disco Ball', value: 'disco-ball'}
            ],
            status: ''

        }
    }
}).mount('#myApp')