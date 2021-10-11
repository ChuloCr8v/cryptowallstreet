import React from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import '../styles/homepage.scss'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'

const Homepage = () => {

    const { data, isFetching } = useGetCryptosQuery(10)
    const globalStats = data?.data?.stats;

    if (isFetching) return 'Loading...'


    return (
        <div className="homepage">
        <>
            <h1 className="heading">Global Cryptocurrency Stats</h1>
            <ol className="cryptos-list">
                <li className="item">
                    <h3 className="title">Total Cryptocurrencies</h3>
                    <p className="content">
                        {millify(globalStats.total)}
                    </p>
                </li>
                <li className="item">
                    <h3 className="title">Total Exchanges</h3>
                    <p className="content">
                        {globalStats.totalExchanges}
                    </p>
                </li>
                <li className="item">
                    <h3 className="title">Total Market Cap</h3>
                    <p className="content">
                        {millify(globalStats.totalMarketCap)}
                    </p>
                </li>
                <li className="item">
                    <h3 className="title">Total Markets</h3>
                    <p className="content">
                        {millify(globalStats.totalMarkets)}
                    </p>
                </li>
                <li className="item">
                    <h3 className="title">Total 24hr Volume</h3>
                    <p className="content">
                        {millify(globalStats.total24hVolume)}
                    </p>
                </li>
            </ol>
            </>
           <div className="top-crypto">
                <h1 className="heading">Top 10 Cryptocurrencies </h1>
                <Cryptocurrencies simplified />
                <Link className="more" to="/Cryptocurrencies">More Coins... </Link>
           </div>
           <div className="top-crypto-news">
                <h1 className="heading">Top Crypto News </h1>
                <News simplified />
                <Link className="more" to="/News">More Updates... </Link>
           </div>
        </div>
    )
}

export default Homepage
