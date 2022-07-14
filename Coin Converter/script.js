const bitcoinDolares = document.querySelector(".bitcoin-precio-dolares");
const bitcoinMxn = document.querySelector(".bitcoin-precio-mxn");
const ethereumDolares = document.querySelector(".ethereum-precio-dolares");
const ethereumMxn = document.querySelector(".ethereum-precio-mxn");

async function getPrice(id) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true&developer_data=true`
  );
  const data = await res.json();
  const moneda = data;
  // Comas
  function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }

  const precioDolares = Number(moneda.market_data.current_price.usd).toFixed(0);
  const precioMxn = Number(moneda.market_data.current_price.mxn).toFixed(0);
  const Pesos = separator(precioMxn);
  const Dolares = separator(precioDolares);

  // Insertar texto
  // bug insertar argumento
  //Dolares

  let coin = id.toString();
  coin = coin + "Dolares";
  console.log(coin);

  let asignar = function (x) {};
  asignar();

  bitcoinDolares.insertAdjacentHTML(
    "afterbegin",
    `<p>$ ${Dolares.toLocaleString("US-en")}</p>`
  );

  ethereumDolares.insertAdjacentHTML(
    "afterbegin",
    `<p>$ ${Dolares.toLocaleString("US-en")}</p>`
  );

  //Pesos
  // bug comas  a pesos
  bitcoinMxn.insertAdjacentHTML(
    "afterbegin",
    `<p>$ ${precioMxn.toLocaleString("US-en")}</p>`
  );
  ethereumMxn.insertAdjacentHTML(
    "afterbegin",
    `<p>$ ${precioMxn.toLocaleString("US-en")}</p>`
  );
}

getPrice("ethereum");
// getPrice("ethereum");
// console.log(moneda);

// console.log(getPrice("bitcoin"));
// console.log(getPrice("ethereum"));
// console.log(getPrice("cardano"));
// console.log(getPrice("polkadot"));

// Diminancia
async function getMarketDominance() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/global?order=total_market_cap"
  );
  const data = await res.json();
  const dominance = data;
  const dominancia = dominance.data.market_cap_percentage;

  // console.log("Bitcoin: " + dominancia.btc.toFixed(2));
  // console.log("Ethereum: " + dominancia.eth.toFixed(2));
  // console.log("USDT: " + dominancia.usdt.toFixed(2));
  // console.log("USDC: " + dominancia.usdc.toFixed(2));
  // console.log("Binance : " + dominancia.bnb.toFixed(2));
  // console.log("Binance  Dolar : " + dominancia.busd.toFixed(2));
  // console.log("Ripple: " + dominancia.xrp.toFixed(2));
  // console.log("Cardano: " + dominancia.ada.toFixed(2));
  // console.log("Solana: " + dominancia.sol.toFixed(2));
  // console.log("Dogecoin : " + dominancia.doge.toFixed(2));

  // let txt = "";
  // for (let x in dominancia) {
  //   txt += dominancia[x] + " ";
  // }
  // console.log(txt);

  return dominancia;
}

console.log(getMarketDominance());
