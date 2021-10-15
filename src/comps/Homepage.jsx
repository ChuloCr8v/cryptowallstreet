import React from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import '../styles/homepage.scss'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'
import Loader from './Loader.jsx'
import AnimationHome from './AnimationHome'
import {FaBitcoin, FaChartBar, FaNewspaper } from 'react-icons/fa'

const Homepage = () => {

    const { data, isFetching } = useGetCryptosQuery(10)
    const globalStats = data?.data?.stats;

    if (isFetching) return <Loader text={'Please hold on. Serving HOT 🔥 Crypto Soup 🍲'} />


    return (
        <div className="homepage">
        <div className="homepage-hero">
        <div className="title-container">
            <h1>Welcome To Crypto Wall Street </h1>
            <p> Your No.1 spot for everything crypto. We serve them hot 🔥</p>
        </div>
        </div>
         <AnimationHome />
            <div className="container">
            <div className="heading-container">
              <div className="icon-container">
                <FaChartBar className="icon" />
                </div>
                <h1 className="heading">All Time <span>Cryptocurrency Stats</span></h1>
                 <h4 className="subtitle">  Glance over the latest cryptocurrency statistics. </h4>
                 </div>
                <ol className="cryptos-list">
                    <li className="item">
                        <h4 className="title">Total Cryptocurrencies</h4>
                        <p className="content">
                            {millify(globalStats.total && globalStats.total)}
                        </p>
                    </li>
                    <li className="item">
                        <h4 className="title">Total Exchanges</h4>
                        <p className="content">
                            {globalStats.totalExchanges}
                        </p>
                    </li>
                    <li className="item">
                        <h4 className="title">Total Market Cap</h4>
                        <p className="content">
                            {millify(globalStats.totalMarketCap)}
                        </p>
                    </li>
                    <li className="item">
                        <h4 className="title">Total Markets</h4>
                        <p className="content">
                            {millify(globalStats.totalMarkets)}
                        </p>
                    </li>
                    <li className="item">
                        <h4 className="title">Total 24hr Volume</h4>
                        <p className="content">
                            {millify(globalStats.total24hVolume)}
                        </p>
                    </li>
                </ol>
            </div>
            <div className="top-crypto">
              <div className="heading-container">

              <div className="icon-container">
                <FaBitcoin className="icon" />
                </div>
               <h1 className="heading">Top 5 <span>Cryptocurrencies</span> </h1>

                <h4 className="subtitle">  A quick look at the top 5 cryptocurrencies at the moment. You can click on a coin card to see more details about each coin, including a 7 day price chart, or use the more coins button to explore other coins. </h4>
                 </div>
                
                <Cryptocurrencies simplified />
                <div className="link">
                    <Link className="more" to="/Cryptocurrencies">More Coins</Link>
                    <div className="button-fill"></div>
                </div>
            </div>
            <div className="top-crypto-news">
              <div className="heading-container">
              <div className="icon-container">
                <FaNewspaper className="icon" />
                </div>
                  <h1 className="heading">Top <span>Crypto News</span> </h1>
                        <h4 className="subtitle"> Get updated on the latest crypto news across the globe. Never miss out on a cryptocurrency gist. </h4>
                 </div>
                
                <News simplified />
                <div className="link">
                    <Link className="more" to="/News">More Updates</Link>

                </div>
            </div>

        </div >
    )
}

export default Homepage
