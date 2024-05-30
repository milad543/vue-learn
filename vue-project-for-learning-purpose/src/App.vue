<template>
  <div>
   <punching-game/>
  </div>
</template>

<script>
import PunchingGame from './components/punchingGame.vue'
// import computedValueVue from './components/computedValue.vue'
export default {
  name: 'App',
  components: {
    // "computed-value": computedValueVue
    "punching-game": PunchingGame
  },
  data(){
    return {
    
    }
  }
}
</script>

<style>
</style>
