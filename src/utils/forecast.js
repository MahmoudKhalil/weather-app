const request = require('request')

const forecast = (locationObj, callback) => {
    const requestURL = "https://api.darksky.net/forecast/7a748f823997053e45ad3295e22bc2a7/" + locationObj.latitude + "," + locationObj.longitude

    request({url: requestURL, json: true}, (error, res) => {
        if(error) {
            callback("Unable to connect to the api!")
        } else if(res.body.error) {
            callback(res.body.error)
        } else {
            data = {
                weather: res.body.currently.temperature,
                place: locationObj.placeName
            }
            callback(undefined, data)
        }
    })
}

module.exports = forecast