import '../styles/LineChart.scss' 
import {Line} from 'react-chartjs-2'
import Loader from './Loader'
const LineChart = ({coinHistory, coinName, currentPrice }) => {
      
   const coinPrice = []
   const coinTimestamp = []
   
   for(let i = 0; i < coinHistory?.data?.history?.length; i++) {
         coinPrice.push(coinHistory.data.history[i].price) 
         coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString()) 
   }
   
   const data= {
         labels: coinTimestamp, 
         datasets: [
               {
                   label: 'Price (USD) ', 
                   data: coinPrice, 
                   fill: false, 
                   backgroundColor: 'green', 
                   borderColor: 'gold',
               } 
            ]
   }
   
   const options = {
         scales: {
               yAxis: [
                     {
                  ticks: {
                      beginAtZero: true  
                  } 
                     } 
               ]
         }
   }
   
      
  return(
    <div class="line-chart">
      <div className="chart-details">
          <p> <span>{coinName} Chart</span></p>
          <p> <span>Current price:</span> USD {currentPrice} </p>
          <p> <span>Price Change:</span> {coinHistory?.data?.change}%</p>
      </div>
      {coinHistory ? <Line options={options} data={data} /> : <Loader text={'Please refresh page to see chart 📊'} />} 
    </div>
    )
}

export default LineChart