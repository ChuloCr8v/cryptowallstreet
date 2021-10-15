import React, { useState, useEffect } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Link } from 'react-router-dom'
import millify from 'millify'
import '../styles/cryptocurrencies.scss'
import { SearchOutlined } from '@ant-design/icons'
import Loader from './Loader'

const Cryptocurrencies = ({ simplified }) => {
      const count = simplified ? 5 : 100;
      const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
      const [cryptos, setCryptos] = useState([])
      const [searchTerm, setSearchTerm] = useState('')

      useEffect(() => {
            const filteredCoins = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))

            setCryptos(filteredCoins)
      }, [searchTerm, cryptosList])


      if (isFetching) return <Loader text={"Please hold on while we serve your crypto dish 🍲. "} />


      return (
            <div>
                  {!simplified &&
                      <div className="cryptos-title">
                        <h1> Top 100 Cryptocurrencies </h1>
                        <p> Browse through a list of the top 100 cryptocurrencies at the moment. The list is up to date. Click on a card to view more details about a coin as well as price chart. </p>
                      </div>
                  } 
                  {!simplified &&
                        <div className="searchbar">
                              <input type="text" placeholder="search cryptocurrency" onChange={(e) => setSearchTerm(e.target.value)} />
                              <div className="search-icon">
                                    <SearchOutlined />
                              </div>
                        </div>
                  }
                  <ol className="crypto-list">
                        {cryptos?.map((crypto, index) => (
                              <li key={index} >
                                    <Link to={`/crypto/${crypto.id} `}>
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
                        ))}
                  </ol>
            </div>
      )
}

export default Cryptocurrencies
