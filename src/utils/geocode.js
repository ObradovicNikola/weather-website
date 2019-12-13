const request = require('request')

const geocode = (address, callback) => {
    const urlLocation = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?&access_token=pk.eyJ1Ijoib2JyYWQwMDkiLCJhIjoiY2szeTZ1aDAxMHg4dzNkcDd4b2xtMDNnZSJ9.HT-cj7eCzqAM220GZpIo3g&limit=1`

    request({ url: urlLocation, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the location services.', undefined)
        } else if (!body.features || body.features.length === 0) {
            callback('Unable to find the location.')
        } else {
            const latitude = body.features[0].center[1]
            const longitude = body.features[0].center[0]
            const location = body.features[0].place_name

            callback(undefined, { latitude, longitude, location })
        }
    })
}

module.exports = geocode