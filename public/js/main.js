const cityname = document.getElementById("cityname");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityname.value;

    if (cityVal === "") {
        city_name.innerText = "Please Enter City Name";
        datahide.classList.add("data_hide");
    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=669a5ae1471994313e61a5317bf82518`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = `${arrData[0].main.temp}°C`;
            arrData[0].weather[0].main;
            const tempMood = arrData[0].weather[0].main;

            if (tempMood == "Clear") {
                temp_status.innerHTML = '<i class="fa-solid fa-sun fa-spin" style="color: #ff7438;"></i>';
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML = '<i class="fa-solid fa-cloud fa-beat-fade" style="color: #a8c8ff;"></i>';
            }
            else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-showers-heavy fa-beat-fade' style='color:#5d93f9;'></i>";
            } else {
                temp_status.innerHTML = '<i class="fa-solid fa-cloud-sun" style="color: #ecd38e;"></i>';
            }
            datahide.classList.remove("data_hide");

        } catch {
            city_name.innerText = "Please Enter Correct City Name";
            datahide.classList.add("data_hide");
        }
    }

}

submitBtn.addEventListener('click', getInfo);


