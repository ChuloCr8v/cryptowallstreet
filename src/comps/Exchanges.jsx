import React, { useState } from 'react'
import { millify } from 'millify'
import { useGetCryptoExchangesQuery } from '../services/cryptoApi'
import '../styles/exchanges.scss'
import Loader from './Loader'
import HTMLReactParser from 'html-react-parser'

const Exchanges = () => {

    const { data, isFetching } = useGetCryptoExchangesQuery()
    const getExchanges = data?.data?.exchanges
    const [showDesc, setShowDesc] = useState(false)
    if (isFetching) return <Loader text={'Serving you hot 🔥 exchanges 💱 '} />

    const desc = (index) => {
        if (showDesc === index) {
            setShowDesc(null)
        }
        setShowDesc(index)
    }

    return (
        <div className="exchanges">
            <div className="exchange-header">
                <h5>Exchanges</h5>
                <h5>Trade Volume</h5>
                <h5>Markets</h5>
                <h5>Changes</h5>
            </div>
            {getExchanges.map((exchange, index) => (
                <div key={index} onClick={() => desc(index)}>
                    <ol className="exchange-item">
                        <li  className="exchange">
                            <p>{exchange.name}</p>
                            <p>{millify(exchange.volume)}</p>
                            <p>{millify(exchange.numberOfMarkets)}</p>
                            <p>{millify(exchange.marketShare)}%</p>
                        </li>
                    </ol>
                    {showDesc === index &&
                        <div className="exchange-desc">
                            <p>{HTMLReactParser(exchange.description || 'No description for this exchange yet')}</p>
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}

export default Exchanges
