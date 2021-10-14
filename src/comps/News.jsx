import React, { useState } from 'react'
import { useGetCryptosNewsQuery } from '../services/cryptoNewsApi'
import '../styles/news.scss'
import moment from 'moment'
import DemoImg from "../images/demo.jpg"
import Loader from './Loader'

const News = ({ simplified }) => {

      const [newsCategory] = useState("Cryptocurrency")
      const { data: cryptoNews, isFetching } = useGetCryptosNewsQuery({
            newsCategory, count: simplified ? 6 : 50
      })
      if (isFetching) return <Loader text={"Getting your crypto news update 📰"} />


     
      return (
            <div>
            {!simplified &&
                      <div className="news-title">
                        <h1> Top Cryptocurrency News Update </h1>
                        <p> This section provides you with up-to-date news and gists on various cryptocurrencies. </p>
                      </div>
                  } 
                  {!simplified &&
                        <div>
                              {/*<select
                              showSearch
                              optionFilterProp="children"
                              placeholder="Select a coin"
                              // onChange={(value) => setNewsCategory(value)}
                              onChange={setFilter}
                              filterOption={(input, option) => option.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                              {data?.data?.coins?.map((coin) =>
                                    <>
                                          <option value={coin.name}>{coin.name}</option>
                                    </>
                              )}

                        </select> */}
                        </div>
                  }
                  <div className="news-list">
                        {cryptoNews?.value?.map((news, i) => (
                              <a href={news.url} target="_blank" rel="noreferrer" className="news-item" key={i} >
                                    <div className="news-item">
                                          <div className="title-container">
                                                <p className="title">{news.name}</p>

                                                <img src={news?.image?.thumbnail?.contentUrl || DemoImg} alt="crypto newa" />
                                          </div>

                                          <div className="description">
                                                <p>
                                                      {news.description > 100 ? ` ${news.description.substring(0, 100)}` : news.description} <span>more... </span>
                                                </p>
                                          </div>
                                          <div className="provider-info">
                                                <div className="provider-detail">
                                                      <img src={news.provider[0]?.image?.thumbnail?.contentUrl || DemoImg} alt="crypto news" />
                                                      <p>{news.provider[0]?.name}</p>
                                                </div>
                                                <div className="news-time">
                                                      <p>{moment(news.datePublished).startOf('ss').fromNow()}</p>
                                                </div>
                                          </div>
                                    </div>
                              </a>
                        ))}
                  </div>
            </div>
      )
}

export default News
