<template>
  <div id="app">
    <header-info></header-info>
    <div class="input_box">
      <input class="input_city" @keyup.enter="getDate" v-model="searchValue" type="text" name="">
      <button class="search_btn" @click="getDate"></button>   
    </div>
      <Message>    
        <b><span v-show="errorMessage != null " class="error">{{errorMessage}}</span></b>
      </Message>
    <div v-show="showDate" class="bg_weather">
        <div class="fullDate">
          <div class="box_weather" v-for = "(val,idx) in objWeather" :key="idx">
            <div class="date_weather">
              {{val.date}}
            </div>
            <div class="status_weather">
              <IconWeather :iconStr = "val.icon"/>
              {{val.description}}
            </div>
            <div class="weather_list">
              <p>Температура: {{ val.temp}}℃</p>
              <p>Влажность: {{ val.humidity}}% </p>
              <p>Атмосф.давление: {{ val.pressure}}Пa</p>
              <p>Скорость ветра: {{ val.wind}}м/с</p>
            </div> 
          </div>
      </div>     
      <DateMinTemperature @min_temp='setMinTemp' :objWeather="objWeather"></DateMinTemperature>
      <span v-if="min_temperature != '' "> Минимальная температура {{min_temperature}} будет {{date_min_temperature}}</span>
    </div>
  </div>
</template>
<script>
import { bus } from './main'
import IconWeather from './components/IconWeather.vue'
import Message from './Message.vue'
import DateMinTemperature from './components/DateMinTemperature.vue'
export default {
  name: 'App',
  //локальная регистрация компонентов
  components: {
    IconWeather, DateMinTemperature, Message
  },
  data(){
    return {
      searchValue: "",
      url:"http://api.openweathermap.org/data/2.5/forecast?q=",
      apiKey:"dee4ae5a7f92682673b9bc825467e808",
      objWeather:[{        
      }],
      min_temperature:'',
      date_min_temperature:'',
      errorMessage:'',
      showDate: false
    }
  },
  methods: {
    getDate(){
      this.$http.get(this.url + this.searchValue+"&appid="+this.apiKey+"&lang=ru&&units=metric")
      .then(response => (
        this.parseDate(response.data),
        this.showDate = true,
        this.min_temperature = '',
        this.errorMessage = ''
      ))
      .catch(error => this.errorMessage = error , this.showDate = false );
      bus.$emit('city',this.searchValue,this.errorMessage);
    },
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
    },
    setMinTemp(data){
      this.min_temperature = data.temp
      this.date_min_temperature = data.date
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  .weather_list{
    display: flex;
    flex-direction: column;
  }
  .weather_list p{
    margin: 0;
  }
  .status_weather{
    display: flex;
    font-weight: italic;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-bottom: 2px solid #320135;
  }
  .date_weather{
    display: flex;
    justify-content: center;
    font-weight: bold;
    border-bottom: 2px solid #320135;
  }
  .fullDate{
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  .box_weather{
    font-size: 12px;
    width: 180px;
    height: 140px;
    margin: 3px;
    padding: 3px;
    border: 2px solid #320135;
  }
  .error{
    width: 400px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
  :active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
  }
  .search_btn {
    background-color:#320135;
    background-image: url("./assets/search.png");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;
    width: 70px;
    color: #fff;
    outline: 0;
    outline-offset: 0; 
    border: 1px solid #320135;
  }
  .input_box {
    display: flex;
    justify-content: center;
    width: 1600px;
    margin-left: auto;
    margin-right:  auto;
    margin-top: 2px;
  }
  .input_city {
    font-size: 24pt;
    margin-right: 5px;
    padding: 5px;
    text-transform: uppercase;
    border: 3px solid #320135;
  }
  .right_box{
    display: flex;
    flex-direction: column;
  }
  .search_city {
    font-size: 36pt;
    color: #320135;
    text-transform: uppercase;
  }
  .logo_city {
    width: 250px;
  }
  .spliter {
    margin-top: 70px;
    margin-bottom: 70px;
    width: 4px;
    margin-right: 40px;
    background-color: #320135;
  }
  .weather_status{
    width: 150px;
    text-align: center;
    text-transform: uppercase;
    font-size: 12pt;
  }
  .bg_weather {
    display: flex;
    width: 100%;
    text-align: center;
    flex-direction: column;
  }
  .left_box img {
    width: 50px;
    height: 50px;
  }
</style>
