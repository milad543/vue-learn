<template>
  <div>
  <div v-for="(item, index) in formItems" :key="index">
    {{ item.lable }}
    <template v-if="item.type === 'color'">
      <input  type="color" v-modle="item.value" @input="updateItems(index, $event.target.value)"/>
    </template>
    <template v-else-if="item.type === 'checkbox'">
      <input  type="checkbox" v-modle="item.value"  @change="updateItems(index, $event.target.checked)" />
    </template>
  </div>
  <button @click="handler">Submit</button>
</div>
</template>

<script>
  export default{
    'name': 'input-form',
    data(){
      return {
        formItems:[
          {lable: 'Candle-Color',type: 'color', value: '#ffffff'},
          {lable: 'Magnet',type: 'checkbox', value: false},
        ],
        data: []
      }
    },
    methods:{
      updateItems(index, eventValue){
          this.formItems[index].value = eventValue;
      },
      handler(){
        console.log(this.formItems)
      }
    }
  }
</script>