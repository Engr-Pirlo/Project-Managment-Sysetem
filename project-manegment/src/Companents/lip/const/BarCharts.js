// charts Months
import {Bar} from 'react-chartjs-2'


import {Chart,LinearScale,BarElement, CategoryScale,Legend,Title} from 'chart.js'


Chart.register(
  LinearScale,CategoryScale,BarElement,Legend,Title
)



// charts months
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
const options={
  plugins:{
    legend:{
      position:'top',

    },
    title:{
      display:true,
      text:'Expensese Tracker'
    }
  }
}
const dataMonthly={
    labels,
    datasets :[
      {
        label: '2020 Salery',
        data:[2340,1200,490,2300,980],
        backgroundColor:'blue',
      },
      {
        label: '2021 Salery',
        data:[760,500,490,400,980],
        backgroundColor:'red',
      },
     

    ]
}





const Barcharts=()=>{
  
    return(
        <div className="bar">
              <Bar   options={options}   data={dataMonthly}/>
        </div>
    )

    
}

export default Barcharts

