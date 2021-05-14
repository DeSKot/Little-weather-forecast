const param = {
  "url": "https://api.openweathermap.org/data/2.5/",
  "appid": '19b5cf963fc6f24c0592cdbc52a84147'
}
function getWeather() {
  const cityId = document.querySelector('.city').value;
  fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
    .then(weather => {
      return weather.json();
    }).then(showWeather);
}


function showWeather(data) {
  console.log(data);
  document.querySelector('.name-2').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = data.main.temp + '&deg';
  document.querySelector('.clouds').innerHTML = data.weather[0].description;
  document.querySelector('.block-temp').innerHTML = `Feels like <br>${data.main.feels_like}&deg`;
  document.querySelector('.temp-min').innerHTML = `Temp min <br>${data.main.temp_min}&deg`;
  document.querySelector('.temp-max').innerHTML = `Temp max <br>${data.main.temp_max}&deg`;
  document.querySelector('.speed').innerHTML = `Speed <br> ${data.wind.speed} km/hour`
}
//getWeather();
//document.querySelector('#city').onchange = getWeather;

//                        с кнопкой интересней                               
document.querySelector('.b-1').onclick = getWeather;

//                                                    создание нового элемента                 
const select = document.createElement('select');
select.classList.add('city');

//                                                     массив для селекта                            
const arrayCities = {
  2643741: 'London',
  625144: 'Minsk',
  3099434: 'Gdansk',
  524901: 'Moscow',
  2950159: 'Berlin',
  4219762: 'Rome',
  1850147: 'Tokyo',
  3882428: 'Los Angeles'
}


//                                                перебор для вывода  данных массива в селект                                   
//                   переправил грубою ошибку с предыдущего архива                         
function option() {
  let out = '';
  for (let key in arrayCities) {
    out += `<option value="${key}">${arrayCities[key]}</option>`;
  }
  select.innerHTML = out;
}
option();

//                                 вывод селекта                                        
document.querySelector('.city').replaceWith(select);




