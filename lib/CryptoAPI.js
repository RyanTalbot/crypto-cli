const axios = require('axios');
const colors = require('colors');

class CryptoAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
    }

    async getPriceData(coinOption, curOption) {

        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: curOption
        });

        try {
            const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`);

            let output = '';

            res.data.forEach(coin => {
                output += `Coin: ${coin.symbol.yellow} (${coin.name} | Price: ${formatter.format(coin.price).green} | Rank: ${coin.rank.blue})\n`;
            });

            return output;

        } catch (err) {
            handleAPIError(err);
        }
    }
}

function handleAPIError(err) {
    if (err.response.status === 401) {
        throw new Error('Invalid API');
    } else if (err.response.status === 404) {
        throw new Error('API not responding');
    } else {
        throw new Error('Umm, what?');
    }
}

module.exports = CryptoAPI;