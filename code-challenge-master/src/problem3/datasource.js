// failed to connect to the https://interview.switcheo.com/test.json
// Reason: CORS header 'Access-Control-Allow-Origin' missing
// My attempt to fetch the data can be seen at the end. After searching and trying, I still cannot solve the above problem.
// For now, I just use the local json data to achieve the result.
// Open the index.html or node '.\datasource.js' to see the result, the output in console should be the same with the sample output.
// Sorry about that. I didn't have much experience about connecting to the data source, but I can learn it later.

jsonData = {
  data: {
    prices: [
      {
        buy: 903072,
        sell: 882068,
        id: 5572536,
        pair: "BTCSGD",
        timestamp: "2018-08-08T13:45:47",
      },
      {
        buy: 6729,
        sell: 6455,
        id: 5572564,
        pair: "LTCUSD",
        timestamp: "2018-08-08T13:47:06.806",
      },
      {
        buy: 51917,
        sell: 49938,
        id: 5572570,
        pair: "ETHSGD",
        timestamp: "2018-08-08T13:47:08.429",
      },
      {
        buy: 86939,
        sell: 83519,
        id: 5572567,
        pair: "BCHSGD",
        timestamp: "2018-08-08T13:47:07.356",
      },
      {
        buy: 9173,
        sell: 8815,
        id: 5572565,
        pair: "LTCSGD",
        timestamp: "2018-08-08T13:47:06.811",
      },
      {
        buy: 666146,
        sell: 639774,
        id: 5572571,
        pair: "BTCUSD",
        timestamp: "2018-08-08T13:47:08.994",
      },
      {
        buy: 63904,
        sell: 61212,
        id: 5572566,
        pair: "BCHUSD",
        timestamp: "2018-08-08T13:47:07.352",
      },
      {
        buy: 38024,
        sell: 36687,
        id: 5572569,
        pair: "ETHUSD",
        timestamp: "2018-08-08T13:47:08.424",
      },
    ],
  },
};

// every price object is a price unit in json data.
class price {
  buy;
  sell;
  id;
  pair;
  timestamp;
  constructor(buy, sell, id, pair, timestamp) {
    this.buy = buy;
    this.sell = sell;
    this.id = id;
    this.pair = pair;
    this.timestamp = timestamp;
  }

  // return the mid-point value between price.buy and price.sell
  mid() {
    return (this.buy + this.sell) / 200;
  }

  // return the quote currency (counter currency) of the trade pair
  quote() {
    return this.pair.substring(this.pair.length - 3);
  }
}

// use dataSouceUtil to initial and store json data and provide the way to use data
class dataSourceUtil {
  prices = [];

  constructor(jsonObj) {
    for (var i = 0; i < jsonObj.length; i++) {
      var p = new price(
        jsonObj[i].buy,
        jsonObj[i].sell,
        jsonObj[i].id,
        jsonObj[i].pair,
        jsonObj[i].timestamp
      );
      this.prices.push(p);
    }
  }
  getPrices() {
    return this.prices;
  }
}

// initial data source
ds = new dataSourceUtil(jsonData.data.prices);
prices = ds.getPrices();
for (var i = 0; i < prices.length; i++) {
  var p = prices[i];
  console.log(`Mid price for ${p.pair} is ${p.mid()} ${p.quote()}.`);
}

// Try to fetch the json file

// class dataSource {
//   prices;
//   src;

//   constructor() {
//     this.src = "https://interview.switcheo.com/test.json";
//     this.prices = fetch(this.src, {
//       mode: "cors",
//       method: "get",
//       credentials: "include",
//     });
//   }
//   getPrices() {
//     return this.prices;
//   }
// }

// //test
// ds = new dataSource();
// const fetchPromise = ds.getPrices();
// console.log(fetchPromise);

// fetchPromise
//   .then((response) => {
//     return response.json();
//   })
//   .then((json) => {
//     console.log(json[0]);
//   });
