<template>
    <div>
        <h1>computed properties</h1>
        <button @click="a++">Added To A</button>
        <button @click="b++">Added To B</button>

        <p> A - {{ a }}</p>
        <p> B - {{ b }}</p>

        <p>Age + A = {{ addToA }}</p>
        <p>Age + B = {{ addToB }}</p>
    </div>
</template>

<script>
export default {
    name: "computedValue",
    data() {
        return {
            age: 20,
            a: 0,
            b: 0
        }
    },
    methods:{
        // addToAasd(){
        //     console.log("addToA");
        //     return this.age + this.a
        // },
        // addToBasd(){
        //     console.log("addToB");
        //     return this.age + this.b
        // }
    },
    computed:{
        addToA(){
            console.log("added to a");
            return this.age + this.a
        },
        addToB(){
            console.log("added to b");
            return this.age + this.b
        }
    }
    
}
</script>


<style scoped>

</style>