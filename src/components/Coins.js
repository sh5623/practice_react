import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import CoinsPagination from "./CoinsPagination";
import "./CoinsPagination.css";

function Coins() {
  const [coins, setCoins] = useState([]);
  const [exchange, setExchange] = useState(1);
  const [coinName, setCoinName] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage, setCoinsPerPage] = useState(20);

  let indexOfLastCoins = currentPage * coinsPerPage;
  let indexOfFirstCoins = indexOfLastCoins - coinsPerPage;
  let currentCoins = coins.slice(indexOfFirstCoins, indexOfLastCoins);

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
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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

  useEffect(() => {}, [coins]);

  return (
    <div style={{ width: 1000 }}>
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
            {currentCoins.map((coin) => (
              <li key={coin.id}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} => ₩
                {coin.quotes.USD.price * exchange}
              </li>
            ))}
          </ul>
          <CoinsPagination
            coinsPerPage={coinsPerPage}
            totalCoins={coins.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </>
      )}
    </div>
  );
}

export default Coins;
