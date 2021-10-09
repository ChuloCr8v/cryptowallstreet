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
            <h1 className="headimg">Global Cryptocurrency Stats</h1>
            <ol className="list">
                <li className="item">
                    <h3 className="title">Total Cryptocurrencies</h3>
                    <div className="content">
                        {globalStats.total}
                    </div>
                </li>
                <li className="item">
                    <h3 className="title">Total Exchanges</h3>
                    <div className="content">
                        {globalStats.totalExchanges}
                    </div>
                </li>
                <li className="item">
                    <h3 className="title">Total Market Cap</h3>
                    <div className="content">
                        {millify(globalStats.totalMarketCap)}
                    </div>
                </li>
                <li className="item">
                    <h3 className="title">Total Markets</h3>
                    <div className="content">
                        {millify(globalStats.totalMarkets)}
                    </div>
                </li>
                <li className="item">
                    <h3 className="title">Total 24hr Volume</h3>
                    <div className="content">
                        {millify(globalStats.total24hVolume)}
                    </div>
                </li>
            </ol>
            </>
           <div className="top-crypto">
                <h1>Top 10 Cryptocurrencies </h1>
                <Cryptocurrencies simplified />
                <Link className="more" to="/Cryptocurrencies">More Coins... </Link>
           </div>
           <div className="top-crypto">
                <h1>Top Crypto News </h1>
                <Link className="more" to="/News">More Updates </Link>
                <News simplified />
           </div>
        </div>
    )
}

export default Homepage
