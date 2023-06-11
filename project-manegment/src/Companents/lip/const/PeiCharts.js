
import {Chart as ChartsScript,ArcElement,Tooltip} from 'chart.js'
import {Pie} from 'react-chartjs-2'

ChartsScript.register(ArcElement,Tooltip);

const labels=['red','blue','green','purple','yellow'];
const options={
 responsive:true,
}
const datapei={
    labels,
    datasets :[
        {
          label: 'votes Somalia',
          data:[203,12,49,23,980],
          backgroundColor:[
            'red',
            'blue',
            'yellow',
            'green',
            'cyan',
            
          ],
          borderColor:[
            'rgba(255,255,255,0.2)',
            'rgba(255,255,255,0.1',
            'rgba(255,255,255,0.1',
            'rgba(255,255,255,0.1',
            'rgba(255,255,255,0.2',
          ]
        },
    ]
}



const PeiCharts=()=>{
return(
    <div className="pei">
        <Pie data={datapei} options={options} />
    </div>
)
}

export default PeiCharts