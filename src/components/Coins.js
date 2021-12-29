import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Coins() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [exchange, setExchange] = useState(1);
  const [coinName, setCoinName] = useState("");
  const [refresh, setRefresh] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    if (coinName === "") {
      return;
    }

    setCoins(
      coins.filter((coin) => {
        return coin.name.toLowerCase().includes(coinName.toLowerCase());
      })
    );

    setCoinName("");
  };
  const onChange = (event) => {
    setCoinName(event.target.value);
  };
  const refreshCoins = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    axios
      .get("https://api.coinpaprika.com/v1/tickers")
      .then((res) => {
        setCoins(res.data);
        setLoading(false);
      })
      .catch((error) => alert(error));

    axios
      .get("https://exchange.jaeheon.kr:23490/query/USDKRW")
      .then((res) => {
        setExchange(res.data.USDKRW[0]);
      })
      .catch((error) => alert(error));
  }, [refresh]);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          <form onSubmit={onSubmit} style={{ display: "inline" }}>
            <input
              value={coinName}
              onChange={onChange}
              placeholder="Enter coin to be searched"
            />
          </form>
          <button
            onClick={refreshCoins}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              fontSize: 12,
              display: "inline-block",
              padding: "3px 3px",
              marginLeft: "5px",
              borderRadius: "5px",
            }}
          >
            Refresh
          </button>

          <ul>
            {coins.map((coin) => (
              <li key={coin.id}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} => ₩
                {coin.quotes.USD.price * exchange}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Coins;
