import HighchartsReact from 'highcharts-react-official';
import Highcharts from "highcharts";
import highchartsGantt from "highcharts/modules/gantt";
import React from 'react';
import {useAppSelector} from "../../app/hooks";
import {dateUtil} from "./chartUtil";

highchartsGantt(Highcharts);
const Chart = () => {
    const chart = useAppSelector(state => state.chart.data.chart)

    console.log(dateUtil("2022-09-02"));
    return (
        <div>

            <HighchartsReact
                highcharts={Highcharts}

                constructorType={"ganttChart"}
                options={{
                    type: "gantt",
                    series: [{
                        data: [
                            {
                                name: "Start prototype",
                                start: Date.UTC(2014, 10, 18),
                                end: Date.UTC(2014, 10, 25),
                                id: "parent1",
                                parent: "parent1",
                                completed: 0.25
                            },
                            {
                                name: "Test prototype",
                                start: Date.UTC(2014, 10, 27),
                                end: Date.UTC(2014, 10, 29),
                                parent: "parent1"
                            },
                            {
                                name: "Develop",
                                start: Date.UTC(2014, 10, 20),
                                end: Date.UTC(2014, 10, 25),
                                parent: "parent1",
                                completed: {
                                    amount: 0.12,
                                    fill: "#fa0"
                                }
                            },
                            {
                                name: "Run acceptance tests",
                                start: Date.UTC(2014, 10, 23),
                                end: Date.UTC(2014, 10, 26),
                                parent: "parent1"
                            }
                        ],
                        scales: {
                            x: {
                                type: 'time',
                            }
                        },
                    }]
                }}
            />
        </div>
    );
};

export default Chart;