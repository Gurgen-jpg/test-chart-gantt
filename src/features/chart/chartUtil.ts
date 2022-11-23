import {ChartDataType} from "./chartSliceType";

export const dateUtil = (time: string) => { //yyyy-mm-dd
    let arr = time && time.split('-')
    return Date.UTC(Number(arr[0]), Number(arr[1]), Number(arr[2]))
}

export const transformData = (data: ChartDataType) => {

    let newData = [] as newDataType[];
    let tempObj = {} as newDataType;
    let tempID = 0;
    type keyType = keyof typeof data;
    let key: keyType;
    for (key in data) {
        if (key === "id") {
            tempID = data.id;
            tempObj = {...tempObj, id: data.id};
        } else if (key === "period_end") {
            tempObj = {...tempObj, end: dateUtil(data.period_end)};
        } else if (key === "period_start") {
            tempObj = {...tempObj, start: dateUtil(data.period_start)};
        } else if (key === "sub") {
            tempObj
        }
    }
}
// export const
// export const chartUtil = (obj: ChartDataType) => {
//     let result = obj.map((el) =>)
// }

// function walk(name: string | ChartDataType[], ) {
//     if (typeof name !== "string") {
//
//     }
// }
export type newDataType = {
    start: number,
    end: number,
    id: number,
    name: string,
    parent: string
}