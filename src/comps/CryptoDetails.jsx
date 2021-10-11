import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {millify} from 'millify'
import HTMLReactParser from 'html-react-parser'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import {Select} from 'antd'
import {useGetCryptoDetailsQuery} from '../services/cryptoApi'
import {useGetCryptoHistoryQuery} from '../services/cryptoApi'
import LineChart from './LineChart.js'
import '../styles/cryptodetails.scss'


const CryptoDetails = () => {
      
      const [timeperiod, setTimeperiod] = useState("7d")
      const {coinId} = useParams()
      const {data:coinHistory, isFetching} = useGetCryptoHistoryQuery({coinId, timeperiod})
      const {data, isFetching:isLoading } = useGetCryptoDetailsQuery(coinId)
      
      if(isFetching || isLoading) return 'Loading...'
      
      const cryptoDetails = data?.data?.coin;
      
      const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y']
      
      const stats = [ 
            { 
              title: 'Price to USD', 
              value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`, 
              icon: <DollarCircleOutlined /> 
            }, 
            {
              title: 'Rank', 
              value: cryptoDetails.rank, 
              icon: <NumberOutlined />
            }, 
            { 
              title: '24h Volume', 
              value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`, 
              icon: <ThunderboltOutlined /> 
            }, 
            { title: 'Market Cap', 
              value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`, 
              icon: <DollarCircleOutlined /> }, 
            { 
              title: 'All-time-high(daily avg.)',
              value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`, 
              icon: <TrophyOutlined /> }, 
        ];
            
     const genericStats = [ 
           { 
             title: 'Number Of Markets', 
             value: cryptoDetails.numberOfMarkets, icon: <FundOutlined /> }, 
           { 
             title: 'Number Of Exchanges', 
             value: cryptoDetails.numberOfExchanges, 
             icon: <MoneyCollectOutlined /> 
                 
           }, 
           {
             title: 'Aprroved Supply', 
             value: cryptoDetails.approvedSupply ? <CheckOutlined /> : <StopOutlined />, 
             icon: <ExclamationCircleOutlined /> }, 
           { 
             title: 'Total Supply', 
             value: `$ ${millify(cryptoDetails.totalSupply)}`, 
             icon: <ExclamationCircleOutlined /> 
           }, 
           { 
             title: 'Circulating Supply', 
             value: `$ ${millify(cryptoDetails.circulatingSupply)}`, 
             icon: <ExclamationCircleOutlined /> }, ];

      
     
    return (
        <div className="crypto-details">
          <h1>{cryptoDetails.name} ({cryptoDetails.slug}) Live Updates</h1>
          <h4>{cryptoDetails.name} price updates in USD, live statistics, market cap and supply. </h4>
         {/* <select 
            className="select-timeperiod" 
            onChange={(value) => setTimeperiod(value)}>
                  {time.map((date) => 
                  <option key={date}>{date}</option>)} 
          </select>*/} 
          <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails.price)} coinName={cryptoDetails.name} />
          <div className="currency-stat">
            <h2>{cryptoDetails.name} Live Statics Update </h2>
            <h4>An overview of {cryptoDetails.name} live statistics </h4>
            <div className="stat-list">
                  {stats.map((stat) => (
                        <div className="stat-item">
                           <div className="stat-title">
                              <p>{stat.icon}</p>
                              <p>{stat.title}</p>
                           </div>
                              <p>{stat.value}</p>
                        </div>
                   ))}
            </div>
          </div>
          
          <div className="all-currency-stat">
            <h2>All Cryptocurrencies Live Statics Update </h2>
            <h4>An overview of all crypto live statistics </h4>
            <div className="stat-list">
                  {genericStats.map((stat) => (
                        <div className="stat-item">
                           <div className="stat-title">
                              <p>{stat.icon}</p>
                              <p>{stat.title}</p>
                           </div>
                              <p>{stat.value}</p>
                        </div>
                   ))}
            </div>
          </div>
          <div className="crypto-description">
            <h1> What you should know about {cryptoDetails.name} </h1>
            <p>
            {HTMLReactParser(cryptoDetails.description)} 
            </p>
          </div>
          <div className="more-info">
            <h1>Get more information on {cryptoDetails.name} </h1>
            {cryptoDetails.links.map((link) => (
                  <div className="links">
                      <p>{link.type}</p>
                      <a href={link.url} target="_blank" rel="noreferrer" >{link.name}</a>
                  </div>
            ))} 
          </div>
        </div>
    )
}

export default CryptoDetails
