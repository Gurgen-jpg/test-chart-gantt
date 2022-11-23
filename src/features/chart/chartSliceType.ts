export type ChartSliceTypeChart<T> = {
    data: T
    status: 'idle' | 'loading' | 'failed';
}
export type ChartDataType = {
    id: number,
    period_end: string
    period_start: string
    sub?: ChartDataType[]
}
export type ResponseType = {
    period: string,
    project: string,
    chart: ChartDataType
}