const request = require('request')

const geocode = (address, callback) => {
    const requestURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + 
                        encodeURIComponent(address) +
                        ".json?access_token=pk.eyJ1IjoibWFobW91ZGtoYWxpbCIsImEiOiJjazBzN2UwNG0wNWNxM2dvMTNrdXNmaHUzIn0.FD_Gb6q1qNiKsxIvaOWiGA&limit=1"
    
    request({url: requestURL, json: true}, (error, res) => {
        if(error) {
            callback(error)
        } else if(res.body.features.length === 0) {
            callback("Please try to enter a valid address!")
        } else {
            locationObj = {
                placeName: res.body.features[0].place_name,
                latitude: res.body.features[0].center[1],
                longitude: res.body.features[0].center[0]
            }

            callback(undefined, locationObj)
        }
    })
}

module.exports = geocode