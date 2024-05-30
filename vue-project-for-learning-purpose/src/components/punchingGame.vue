<template>
    <div>
        <h1>Punching Game!</h1>

        <div class="bag">

        </div>

        <div class="health">
            <div></div>
        </div>

        <div class="controls">
            <button>Punch</button>
            <button>Reset</button>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
.bag{
    width: 200px;
    height: 300px;
    margin: 0 auto;
    background: url(../assets/bag.jpg) center no-repeat;
    background-size: 80%;
}
</style>