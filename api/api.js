import axios from "axios";

export async function getCity(city) {
  const apiKey = "6a347f1923f771d042c7869371ca5501";  
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

 return await axios
    .get(apiUrl)
    .then((response) => {
      // Aquí puedes manejar la respuesta de la solicitud
   ;
      const data = response.data
      console.log(data.name)
      const weather = {
        temp: data?.main?.temp,
        min: data?.main?.temp_min,
        max: data?.main?.temp_max,
        weather: data?.weather[0]?.main,
        icon: data?.weather[0]?.icon,
        name: data?.name
      }

      return weather;
    })
    .catch((error) => {
      // Aquí puedes manejar los errores de la solicitud
      console.log(error);
      return 'City Not Found'
    });
}
