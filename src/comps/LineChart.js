import '../styles/LineChart.scss' 
import {Line} from 'react-chartjs-2'

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
                   backgroundColor: 'red', 
                   borderColor: 'blue'
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
          <p> {coinName} </p>
          <p> Current price: USD {currentPrice} </p>
          <p> Price Change: {coinHistory?.data?.change}%</p>
      </div>
      <Line options={options} data={data} />
    </div>
    )
}

export default LineChart