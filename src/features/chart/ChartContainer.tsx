import React, {useEffect} from 'react';
import Chart from './Chart';
import {useAppDispatch} from "../../app/hooks";
import {getChartDataAsync} from "./chartSlice";

const ChartContainer = () => {
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(getChartDataAsync())
    },[])

    return (
        <Chart/>
    );
};

export default ChartContainer;