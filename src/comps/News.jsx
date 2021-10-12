import React, { useState } from 'react'
import { useGetCryptosNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import '../styles/news.scss'
import moment from 'moment'
import { Select, Col } from 'antd'
import DemoImg from "../images/demo.jpg"

const { Option } = Select

const News = ({ simplified }) => {

      const [newsCategory, setNewsCategory] = useState("Cryptocurrency")
      const { data: cryptoNews, isFetching } = useGetCryptosNewsQuery({
            newsCategory, count: simplified ? 6 : 50
      })
      if (isFetching) return 'Loading...'


     
      return (
            <div>
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
                  {!simplified &&
                  <div className="news-heading">
                    <h1>Top Cryptocurrency News Update </h1>
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
                                                      <img src={news.provider[0]?.image?.thumbnail?.contentUrl || DemoImg} />
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
