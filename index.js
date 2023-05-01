const crearTarjeta = (ciudad) => {
  const nombreCiudad = ciudad;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${nombreCiudad}&appid=eea73271e59b202222b27878af61f65c&lang=es&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      const icono = responseJson.weather[0].icon;
      const container = document.createElement("div");
      const card = document.createElement("div");
      const cardHeader = document.createElement("div");
      const imagen = document.createElement("img");
      const city = document.createElement("h2");
      const temperatura = document.createElement("p");
      const descripcionClima = document.createElement("p");
      const humedad = document.createElement("p");
      //Cabecera de Card
      cardHeader.className = "p-3 text-center text-white";
      city.textContent = responseJson.name;
      cardHeader.appendChild(city);

      //Cuerpo Card
      card.className =
        "card-body d-flex row justify-content-around text-center bg-card";
      temperatura.textContent = Math.round(responseJson.main.temp) + " " + "°C";
      temperatura.className = "col-12  h1 text-white";
      imagen.className = "col-6";
      imagen.width = "40";
      imagen.src = `https://openweathermap.org/img/wn/${icono}@4x.png`;
      descripcionClima.className = "col-12 h6 s-1 text-white";
      descripcionClima.textContent = responseJson.weather[0].description;
      humedad.className = "col-12 h6 text-white";
      humedad.textContent =
        "humedad: " + " " + responseJson.main.humidity + "%";
      card.append(cardHeader, temperatura, imagen, descripcionClima, humedad);
      container.className = "bg-card-js col-6 m-1 col-lg-2 align-items-around";
      container.append(cardHeader, card);
      const nodo = document.getElementById("container");
      nodo.appendChild(container);
    });
};

function mostrar(e) {
  console.log(e);
  crearTarjeta(e.target.value);
}

function resetear() {
  location.reload();
}

const form = document.getElementById("ciudad");
form.addEventListener("change", mostrar);

const reset = document.getElementById("reset");
reset.addEventListener("click", resetear);
