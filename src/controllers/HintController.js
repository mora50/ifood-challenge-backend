const axios = require('axios')

const qs = require('qs')

async function getToken() {

  try {

    //Url to call a new token
    const urlToken = 'https://accounts.spotify.com/api/token'

    //params to refresh the token
    const paramsToken = {
      client_id: 'd81fe1b203b641b39c18c72c9578e15f',
      client_secret: '97b1846855dc4db9a18d2ca07401da87',
      grant_type: 'client_credentials'
    }

    return await axios.post(urlToken, qs.stringify(paramsToken))

  } catch (error) {
    console.log(error)
  }
}

async function getPlaylist(req, res) {

  try {

    // const calltoken = await getToken()

    // const token = calltoken.data.access_token

    // console.log(token)

    const config = {
      headers: {
        'Authorization': 'Bearer ' + 'BQAodHi1yzK3v-8P-YI89_h7FQD1dh654wpgV1nyUMA6jyupi9mdiq8L0sUXnRgLJe3_9xnNO7vMzN2t-IY', //token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }

    //  const url = `https://api.spotify.com/v1/playlists/${playlistId}` 

    const url = 'https://api.spotify.com/v1/playlists/1j2L3DjzZ3SdN64r83Sblj?si=cuvOrPONSO6caE9XD6smEg'

    await axios.get(url, config)

      .then(function (response) {

        var playlist = response

        var items = playlist.data.tracks.items

        const playlistfull = []

        items.forEach(index => {

          var artists = index.track.album.artists

          artists = artists.map(({ name }) => name)

          var playlistdata = {
            name: index.track.name,
            artists: artists,
            album: index.track.album.name,
            url: index.track.external_urls.spotify
          }

          playlistfull.push(playlistdata)

        })

        return res.json(playlistfull)

      })

  } catch (error) {

    return console.log(error)

  }
}

async function getWeather(city) {

  try {
    const url = 'http://api.openweathermap.org/data/2.5/weather';

    const params = {

      params: {
        units: 'metric',
        APPID: 'b77e07f479efe92156376a8b07640ced',
        q: city,
      }
    }

    return await axios.get(url, params)

    // .then(function (response) {

    //   return response.data.main

    // })
  } catch (error) {
    return error
  }
}

async function recommendedPlaylist(req, res) {

  try {

    var city = req.query.city

    const get_weather = await getWeather(city)

    const weather = get_weather.data.main.temp;




  } catch (err) {
    return res.send(err)
  }

}

module.exports = { recommendedPlaylist }