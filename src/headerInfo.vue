<template>
  <div class="header-info">
    <h1>{{info}}</h1>
  </div>
</template>

<script>
import { bus } from './main'
export default {
  name: 'icon_weather',
  props:{
  },
  data(){
    return {
      info:"Прогноз погоды на 5 дней"
    }
  },
  created(){
    bus.$on('city', data => {
      this.info = data;
    })
  }

}
</script>

<style>
  .header-info{
    display: flex;
    justify-content: center;
    height: 60px;
    text-transform: uppercase;
  }
</style>
