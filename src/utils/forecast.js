const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const urlWeather = `https://api.darksky.net/forecast/8df57bbe55e0acaca3c1d7aa7acfc974/${latitude},${longitude}?units=si`

    request({ url: urlWeather, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the weather services...')
        } else if (body.error) {
            callback('Something went wrong with the weather services...')
        } else {
            callback(undefined, `The temp is ${body.currently.temperature}C. There is a ${body.currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast