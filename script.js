const chave = "698c933046fecf661b395caefab54b0e";

var input = document.querySelector('#input');
var pesq = document.querySelector('#search');
var cida = document.getElementById('input');
var cidade = document.getElementById('cidade');
var ocasi = document.querySelector('#ocasi');
var temp = document.getElementById('temp');
var icon = document.querySelector('#icon');
const resultcid = document.querySelector('#imagescid')


pesq.addEventListener('click', (event) => {
    event.preventDefault();
    page = 1
    getApi(),
    imagesApi()
});


async function getApi() {
    const apilink = `https://api.openweathermap.org/data/2.5/weather?q=${cida.value}&units=metric&appid=${chave}&lang=pt_br`;
    fetch(apilink)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            cidade.innerHTML = data.name;
            temp.innerHTML = parseInt(data.main.temp ?? 0);
            ocasi.innerHTML = data.weather[0].description;
            icon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);

            // Mostrar as informações do clima
            document.getElementById("data").classList.remove("hide");
            document.getElementById("card").style.width = "350px";
            
            if (data.weather[0].main == "Clear") {
                document.body.style.backgroundImage = "url('img/pexels-arthur-shuraev-15184711.jpg')";
            } else if (data.weather[0].main == "Clouds") {
                document.body.style.backgroundImage = "url('img/pexels-pixabay-209831.jpg')";
            } else if (data.weather[0].main == "Drizzle") {
                document.body.style.backgroundImage = "url('img/pexels-fabiano-rodrigues-2290328.jpg')";
            } else if (data.weather[0].main == "Mist") {
                document.body.style.backgroundImage = "url('img/pexels-andre-furtado-1162251.jpg')";
            } else if (data.weather[0].main == "Rain") {
                document.body.style.backgroundImage = "url('img/pexels-pixabay-459439.jpg')";
            }
             else if (data.weather[0].main == "Snow") {
                document.body.style.backgroundImage = "url('img/wladislaw-sokolowskij-0vw4InAC-yM-unsplash.jpg')";
            }
            
             else if (data.weather[0].main == "Fog") {
                document.body.style.backgroundImage = "url('img/jakub-kriz-arOyDPUAJzc-unsplash.jpg')";
            }
        })
        .catch((error) => {
            console.error('Erro ao buscar dados do clima:', error);
        });
}

const chavephoto = "IQmHoU8iYkNrme12OKVz1gMpP7CehOSo-2GusndK2ws"
const photo = document.getElementById('#imagescidimagescid')
let Keyword = ""
let page = 1

async function imagesApi(){
    const apiurl = `https://api.unsplash.com/search/users?page=${page}&query=${Keyword}&client_id=${chavephoto}&lang=pt_br`
    fetch(apiurl)
        .then((response) => {
            return response.json();
        })
        .then((dt)=>{
            console.log(dt)
           
        })
}
