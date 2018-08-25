const endpoint = 'https://api.foursquare.com/v2/venues/search'
const ll = '50.06465,19.94498'
const query = 'restaurant'
const intent = 'checkin'
const clientId = 'OETCS0J3AWPZKPR2402EJKNKFMD1KOFE3MIVDBDYB2BQ3QTU'
const clientSecret = 'MRVDTPZJ4TEIXV3RLGXKM32YMNXNTMO20ISBLJV2XGCCVHW2'
const version = '20180815'
const url = `${endpoint}?ll=${ll}&query=${query}&intent=${intent}&client_id=${clientId}&client_secret=${clientSecret}&v=${version}`

export const getAllVenues = () => 
    fetch(url)
        .then(response => response.json())
            .then(data => data.response.venues)
                .catch(error => {
                    console.error(error);
                })