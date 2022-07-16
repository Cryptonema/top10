// Selectors

const bitcoinDolares = document.querySelector(".bitcoin-precio-dolares");
const bitcoinMxn = document.querySelector(".bitcoin-precio-mxn");
const ethereumDolares = document.querySelector(".ethereum-precio-dolares");
const ethereumMxn = document.querySelector(".ethereum-precio-mxn");
const cardanoDolares = document.querySelector(".cardano-precio-dolares");
const cardanoMxn = document.querySelector(".cardano-precio-mxn");

async function getPrice(id) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true&developer_data=true`
  );
  const data = await res.json();
  return data;
}

function separator(numb) {
  var str = numb.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return str.join(".");
}

const asignar = function (x) {
  x.insertAdjacentHTML(
    "afterbegin",
    `<p>$ ${dolares.toLocaleString("US-en")}</p>`
  );
};

getPrice("bitcoin")
  .then((coin) => {
    const precioDolares = Number(coin.market_data.current_price.usd).toFixed(2);
    const precioMxn = Number(coin.market_data.current_price.mxn).toFixed(2);
    const pesos = separator(precioMxn);
    const dolares = separator(precioDolares);
    console.log(precioDolares);
    console.log(precioMxn);
    console.log(pesos);
    console.log(dolares);

    const setUsdPrice = function (x) {
      x.insertAdjacentHTML(
        "afterbegin",
        `<p>$ ${dolares.toLocaleString("US-en")}</p>`
      );
    };

    const setMxnPrice = function (x) {
      x.insertAdjacentHTML(
        "afterbegin",
        `<p>$ ${precioMxn.toLocaleString("US-en")}</p>`
      );
    };

    setUsdPrice(bitcoinDolares);
    setMxnPrice(bitcoinMxn);
  })
  .catch((e) => console.log(e));

getPrice("ethereum")
  .then((coin) => {
    const precioDolares = Number(coin.market_data.current_price.usd).toFixed(2);
    const precioMxn = Number(coin.market_data.current_price.mxn).toFixed(2);
    const pesos = separator(precioMxn);
    const dolares = separator(precioDolares);
    console.log(precioDolares);
    console.log(precioMxn);
    console.log(pesos);
    console.log(dolares);

    const setUsdPrice = function (x) {
      x.insertAdjacentHTML(
        "afterbegin",
        `<p>$ ${dolares.toLocaleString("US-en")}</p>`
      );
    };

    const setMxnPrice = function (x) {
      x.insertAdjacentHTML(
        "afterbegin",
        `<p>$ ${precioMxn.toLocaleString("US-en")}</p>`
      );
    };

    setUsdPrice(ethereumDolares);
    setMxnPrice(ethereumMxn);
  })
  .catch((e) => console.log(e));

getPrice("cardano")
  .then((coin) => {
    const precioDolares = Number(coin.market_data.current_price.usd).toFixed(2);
    const precioMxn = Number(coin.market_data.current_price.mxn).toFixed(2);
    const pesos = separator(precioMxn);
    const dolares = separator(precioDolares);
    console.log(precioDolares);
    console.log(precioMxn);
    console.log(pesos);
    console.log(dolares);

    const setUsdPrice = function (x) {
      x.insertAdjacentHTML(
        "afterbegin",
        `<p>$ ${dolares.toLocaleString("US-en")}</p>`
      );
    };

    const setMxnPrice = function (x) {
      x.insertAdjacentHTML(
        "afterbegin",
        `<p>$ ${precioMxn.toLocaleString("US-en")}</p>`
      );
    };

    setUsdPrice(cardanoDolares);
    setMxnPrice(cardanoMxn);
  })
  .catch((e) => console.log(e));
