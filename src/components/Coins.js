import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Coins() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.coinpaprika.com/v1/tickers")
      .then((res) => {
        setCoins(res.data);
        setLoading(false);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Coins;
