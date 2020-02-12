<template>
  <div class="icon">
    <span v-html="getIcon()"></span>
  </div>
</template>

<script>
export default {
  name: 'icon_weather',
  props:{
    iconStr: String
  },
  data(){
    return {
      url:"https://openweathermap.org/img/wn/",
      format:"@2x.png"
    }
  },
  methods:{
    getIcon(){
      if(this.iconStr == null) return "<span></span>"
      return "<img src="+this.url+this.iconStr+this.format+">"
    }
  }
}
</script>

<style>
  .icon{
    width: 50px;
    height: 50px;
  }
  .icon img{
    width: 50px;
    height: 50px;
  }
</style>
