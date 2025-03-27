// In TypeScript, an enum is a way to define a set of named constants. Enums allow you to define a collection of related values that can be used interchangeably in your code.

enum WeatherConditions {
    Sunny,
    Cloudy,
    Rainy,
    Snowy,
  }

console.log(WeatherConditions.Sunny) // This will o/p:- the index of sunny i.e., 0

enum WeatherConditions1 {
    Sunny = "sunny",
    Cloudy = "Cloudy",
    Rainy = "Rainy",
    Snowy = "Snowy",
  }
const currentWeather = WeatherConditions1.Sunny
console.log(currentWeather) // This will give sunny as an output