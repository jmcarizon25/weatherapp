const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7995dcb22591c8d430a01a239d58c5d4&query=' + lat + ',' + long

    request({ url, json: true }, (error, { body }) => {
        const {weather_descriptions, temperature, feelslike} = body.current
        if(error) {
            callback('Could not get to the service!', undefined) 
        } else if(body.error) {
            callback('Location not found!', undefined)
        } else {
            callback(undefined, 
                'Today is ' + weather_descriptions[0] + '. The temperature is ' + temperature + ' but it feels like ' + feelslike + '.'
            )
        }
    })
}

module.exports = forecast