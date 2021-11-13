



//fethching the api 
let humidityEl = document.getElementById('hum-el')
let tempEl = document.getElementById('temp-el')
let presEl = document.getElementById('pres-el')
let refBtn = document.getElementById('btn-el')
let cityname = "Bengaluru"
let statecode="29"
let countrycode="91"
//Generate your API key from the author(openweather.org)
let APIkey=""

let url = "https://api.openweathermap.org/data/2.5/weather?q="+cityname+","+statecode+","+countrycode+"&units=metric"+"&appid="+APIkey


//https://api.openweathermap.org/data/2.5/weather?q=Bengaluru,29,91&units=metric&appid=cbeee001d25c252c35770d4527e6a516
fetch(url,params={units:'metric'})
    .then(response => response.json())
    .then(datael = (data) => {
        let tempel = data.main.temp
        let humel = data.main.humidity
        let presel = data.main.pressure
        tempEl.innerHTML = `<h1>The Temperature is 🌨️
                                            <span><br><br>
                                                ${tempel}°C
                                            </span>
                            </h1>`
        humidityEl.innerHTML =`<h1>The Humidity is 🌤️
                                        <span><br><br>
                                            ${humel}%
                                        </span>
                                </h1>`
        presEl.innerHTML = `<h1>The pressure is 💨
                                    <span><br><br>
                                    ${presel} mb
                                    </span>
                            </h1>`
        console.log(humel)
        console.log(tempel)
    })

    //button 

    refBtn.addEventListener("click",()=>{
        window.location.reload()
    })
