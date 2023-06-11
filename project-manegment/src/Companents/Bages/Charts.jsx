import React from 'react'
import Barcharts from '../lip/const/BarCharts'
import LineCharts from '../lip/const/LineCharts'
import PeiCharts from '../lip/const/PeiCharts'

function Charts() {
  return (
    <div>
        <div className="header">
            <h1>Charts </h1>
        </div>

        <div className="container">
            <div className="row grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white">
                    <div className="header">
                        <h1>Pei charts</h1>
                    </div>
                    <PeiCharts/>
                </div>

                <div className="bg-white ">
                    <div className="header">
                        <h1>Line charts</h1>
                    </div>
                    <LineCharts/>
                </div>



                <div className="bg-white ">
                    <div className="header">
                        <h1>bar charts</h1>
                    </div>
                    <Barcharts/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Charts