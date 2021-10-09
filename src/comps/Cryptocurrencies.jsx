import React, {useState} from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import {Link} from 'react-router-dom'
import millify from 'millify'
import '../styles/cryptocurrencies.scss'

const Cryptocurrencies = ({simplified}) => {
     const count = simplified ? 10 : 100;
     const { data:cryptosList, isFetching} = useGetCryptosQuery(count)
     const [cryptos, setCryptos] = useState(cryptosList ?. data ?.coins)
    if(isFetching) return 'Loading...'
      
      
    return (
        <div>
            {cryptos.map((crypto) => (
                <ol className="crypto-list">
                  <li>
                        <Link to={ `/crypto/${crypto.id} `}>
                              <div className="title">
                                    <h1>{crypto.rank}. {crypto.name}</h1>
                              <img alt='crypto' src={crypto.iconUrl} />
                              </div>
                              <div className="details">
                                    <p>Price: USD {millify(crypto.price)}</p>
                                    <p>Market Cap: {millify(crypto.marketCap)}</p>
                                    <p>Daily Changes: {crypto.change}%</p>
                                    
                              </div>
                        </Link>
                  </li>
                </ol>
            ))} 
        </div>
    )
}

export default Cryptocurrencies
