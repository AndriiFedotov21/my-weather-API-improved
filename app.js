const input = document.getElementById('city-input')
const city = document.querySelector('.city-name')
const btn = document.querySelector('.btn')
const temperature = document.querySelector('.temperature')
const weatherType = document.querySelector('.type-of-weather')
const obsBtn = document.querySelector('.add-city')


btn.onclick = () => {
    city.innerHTML = input.value
    console.log(input.value)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=60ac075c0193e2ea0b64789e3276fef5`)
        .then(function (resp){
            if(resp.status !== 404) {
                return resp.json()
            }
            else {
                city.innerHTML = 'No matches'
                weatherType.innerHTML = ''
                temperature.innerHTML = '';
            }
        }).then( function (data) {
            temperature.innerHTML = `${Math.round(data.main.temp - 273)} \u00B0`
            const icon = data.weather[0].icon
            weatherType.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png">`
        function addCity() {
            var ul = document.querySelector(".city-list");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(''));
            li.innerHTML = `${input.value}, 
                            <img src="http://openweathermap.org/img/wn/${icon}.png">, 
                             ${Math.round(data.main.temp - 273)} \u00B0`
            ul.appendChild(li);
            console.log(li)
            const list = document.querySelectorAll('.city-list li')
            if (list.length > 6) {
                ul.innerHTML = ''
                li.appendChild(document.createTextNode(''));
                li = document.createElement("li");
                li.innerHTML = `${input.value}, 
                            <img src="http://openweathermap.org/img/wn/${icon}.png">, 
                             ${Math.round(data.main.temp - 273)} \u00B0`
                ul.appendChild(li);
            }
        }
        addCity()
    })
}
obsBtn.onclick = () => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=60ac075c0193e2ea0b64789e3276fef5`)
        .then(function (resp) {
            if (resp.status !== 404) {
                return resp.json()
            } else {
                city.innerHTML = 'No matches'
                weatherType.innerHTML = ''
                temperature.innerHTML = '';
            }
        }).then( function (data) {
        const icon = data.weather[0].icon
        function obsCity() {
            var obsUl = document.querySelector(".observe-list");
            var obsLi = document.createElement("li");
            obsLi.appendChild(document.createTextNode(''));
            obsLi.innerHTML = `${input.value}, 
                            <img src="http://openweathermap.org/img/wn/${icon}.png">, 
                             ${Math.round(data.main.temp - 273)} \u00B0`
            obsUl.appendChild(obsLi);
            console.log(obsLi)
            const obsList = document.querySelectorAll('.observe-list li')
            if (obsList.length > 6) {
                obsUl.innerHTML = ''
                obsLi.appendChild(document.createTextNode(''));
                obsLi = document.createElement("li");
                obsLi.innerHTML = `${input.value}, 
                            <img src="http://openweathermap.org/img/wn/${icon}.png">, 
                             ${Math.round(data.main.temp - 273)} \u00B0`
                obsUl.appendChild(li);
            }
        }
        obsCity()
    })
}

