import Head from 'next/head'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Coin from '../components/Coin';

export default function Home() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    }).catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Crypto Price Tracker</title>
      </Head>
      <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            volume={coin.total_volume}
            marketCap={coin.market_cap}
            image={coin.image}
            priceChange1h={coin.price_change_percentage_1h_in_currency}
            priceChange24h={coin.price_change_percentage_24h_in_currency}
            priceChange7d={coin.price_change_percentage_7d_in_currency}
          />
        );
      })}
    </div>
    </>
  )
}

