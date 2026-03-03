// Weather API (Bangalore Coordinates Example)
const url = "https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current_weather=true";



// PROMISES VERSION


const getWeatherWithPromises = () => {

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network error");
            }
            return response.json();
        })
        .then(data => {

            const weather = data.current_weather;

            const report = `

Temperature: ${weather.temperature}°C
Wind Speed: ${weather.windspeed} km/h
Time: ${weather.time}
`;

            console.log(report);
        })
        .catch(error => {
            console.error("Error (Promises):", error.message);
        });
};
// ASYNC / AWAIT VERSION
const getWeatherAsync = async () => {

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch weather");
        }

        const data = await response.json();
        const weather = data.current_weather;

        const report = `

Temperature: ${weather.temperature}°C
Wind Speed: ${weather.windspeed} km/h
Time: ${weather.time}
`;

        console.log(report);

    } catch (error) {
        console.error("Error (Async/Await):", error.message);
    }
};


// Call both functions
getWeatherWithPromises();
getWeatherAsync();