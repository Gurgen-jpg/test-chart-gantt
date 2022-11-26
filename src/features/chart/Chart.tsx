import HighchartsReact from 'highcharts-react-official';
import Highcharts from "highcharts";
import highchartsGantt from "highcharts/modules/gantt";
import React from 'react';
import {useAppSelector} from "../../app/hooks";
import {transformData} from "./chartUtil";

highchartsGantt(Highcharts);
const Chart = () => {
    const chart = useAppSelector(state => state.chart.data.chart);
    const tableTitle = useAppSelector(state => state.chart.data.project);
    const period = useAppSelector(state => state.chart.data.period)


    console.log('newData ==>', transformData(chart))
    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={"ganttChart"}
                options={{
                    title: {
                        text: tableTitle,
                        position: "left",
                        display: true
                    },
                    subtitle: {
                        display: true,
                        text: period
                    },
                    series: [
                        {
                            type: "gantt",
                            data: transformData(chart),
                            plugins: {
                                legend: {
                                    position: 'top',
                                },
                            }
                        }
                    ]
                }}
            />
        </div>
    );
};

export default Chart;