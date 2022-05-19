const request = require('request')

const forecast = (lat, long, callback) => {
    // const url = 'http://api.weatherstack.com/current?access_key=7995dcb22591c8d430a01a239d58c5d4&query=' + lat + ',' + long
    const url = 'http://api.weatherapi.com/v1/current.json?key=62562f74a3e94c2d9a320510221905&q=' + lat + ',' + long + '8&aqi=no'

    request({ url, json: true }, (error, { body }) => {
        const {condition, temp_c, feelslike_c} = body.current
        if(error) {
            callback('Could not get to the service!', undefined) 
        } else if(body.error) {
            callback('Location not found!', undefined)
        } else {
            callback(undefined, 
                'Today is ' + condition.text + '. The temperature is ' + temp_c + ' but it feels like ' + feelslike_c + '.'
            )
        }
    })
}

module.exports = forecast