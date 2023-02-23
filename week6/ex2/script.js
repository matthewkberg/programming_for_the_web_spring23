const {createApp} = Vue;

createApp({
    data() { // Whatever data is returned here is what we have access to
       return {
        name: "Matt"
        }
    }
}).mount("#myApp");