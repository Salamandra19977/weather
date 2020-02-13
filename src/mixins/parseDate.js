export default {
    data() {
        return {
        }
    },
    methods: {
    parseDate(obj){
      console.log(obj)
      this.objWeather.length = 0;
      for(let key of obj.list){
        this.objWeather.push({
          "temp":key.main.temp,
          "date":key.dt_txt,
          "pressure":key.main.pressure,
          "humidity":key.main.humidity,
          "description":key.weather[0].description,
          "wind":key.wind.speed,
          "icon":key.weather[0].icon
        });
      }
    }
  }
}