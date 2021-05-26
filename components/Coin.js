import React from 'react'

export default function Coin(props) {
    return (
        <div className='coin-container'>
        <div className='coin-row'>
          <div className='coin'>
            <img src={props.image} alt='crypto' />
            <h1>{props.name}</h1>
            <p className='coin-symbol'>{props.symbol.toUpperCase()}</p>
          </div>
          <div className='coin-data'>
            <p className='coin-price'>₱{props.price.toLocaleString()}</p>

            {props.priceChange24h < 0 ? (
              <p className='coin-percent red'>{props.priceChange24h.toFixed(2)}%</p>
            ) : (
              <p className='coin-percent green'>{props.priceChange24h.toFixed(2)}%</p>
            )}

            {props.priceChange7d < 0 ? (
              <p className='coin-percent red'>{props.priceChange7d.toFixed(2)}%</p>
            ) : (
              <p className='coin-percent green'>{props.priceChange7d.toFixed(2)}%</p>
            )}

            <p className='coin-volume'>₱{props.volume.toLocaleString()}</p>
  
            <p className='coin-marketcap'>
              Mkt Cap: ₱{props.marketCap.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    )
}

//fix 1h green toFixed(2) part
