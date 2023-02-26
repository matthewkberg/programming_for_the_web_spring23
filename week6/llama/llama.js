const {createApp} = Vue;

createApp({
    data() {
       return {
        animal: "Llamas",
        learn: true,
        lifespan: "20 years",
        social: "herds",
        height: "6 feet",
        communication: "Humming",
        

        }
    }
}).mount("#myFacts");