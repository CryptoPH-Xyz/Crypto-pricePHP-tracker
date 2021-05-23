import Head from 'next/head'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
    .then(res => {
      setCoins(res.data);
    })
  })

  return (
    <>
      <Head>
        <title>Crypto Price Tracker</title>
      </Head>
      <h1>APIII</h1>
    </>
  )
}

