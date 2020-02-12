<template>
  <div class="min_temp">
    <button @click="getMinTemp" class="min_btn">MIN</button>
  </div>
</template>

<script>
export default {
  name: 'min_temp',
  props:{
    objWeather:null
  },
  data(){
    return {
      date:'',
      temp:0
    }
  },
  methods:{
    getMinTemp(){
      for(let key of this.objWeather){
        if(key.temp < this.temp){
          this.temp = key.temp
          this.date = key.date
        }
      }
      this.$emit('min_temp', {
        temp: this.temp,
        date: this.date
      })    
    }
  }
}
</script>

<style>
  .min_temp{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .min_btn {
    width: 100px;
    height: 50px;
    background-color: #320135;
    color: #fff;
  }
</style>
