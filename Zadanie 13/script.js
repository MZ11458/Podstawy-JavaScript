// Przygotowano pobieranie pogody z API; rozszerzenie wlasne to parametry latitude, longitude i nazwa miejsca, a najwieksza trudnosc sprawilo bezpieczne obsluzenie bledu pobierania danych.
async function fetchWeather(latitude = 50.29, longitude = 19.10, placeName = "Katowice") {
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Blad odpowiedzi API: ${response.status}`);
    }

    const weatherData = await response.json();
    const currentWeather = weatherData.current;

    console.log(`Pogoda dla: ${placeName}`);
    console.log(`Temperatura: ${currentWeather.temperature_2m} ${weatherData.current_units.temperature_2m}`);
    console.log(`Predkosc wiatru: ${currentWeather.wind_speed_10m} ${weatherData.current_units.wind_speed_10m}`);
  } catch (error) {
    console.log(`Nie udalo sie pobrac danych pogodowych: ${error.message}`);
  }
}

fetchWeather(50.29, 19.10, "Katowice");
