import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ChartDataType, ChartSliceTypeChart, ResponseType} from "./chartSliceType";
import axios from "axios";


const initialState = {
    data: {
        period: '',
        project: '',
        chart: {} as ChartDataType,
    },
    status: 'idle',
} as ChartSliceTypeChart<ResponseType>;

export const getChartDataAsync = createAsyncThunk(
    'chart/fetchChart',
    async () => {
        const response = await axios.get('http://82.202.204.94/tmp/test.php')
        return response.data
    }
);

const chartSlice = createSlice({
    initialState,
    name: 'chart',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getChartDataAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getChartDataAsync.fulfilled, (state, action: PayloadAction<ResponseType>) => {
                let {period, project, chart} = action.payload
                state.data.period = period;
                state.data.project = project;
                state.data.chart = chart;
                state.status = 'idle';
            })
            .addCase(getChartDataAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
})


const chartReducer = chartSlice.reducer;
export default chartReducer;