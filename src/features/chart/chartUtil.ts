import {ChartDataType} from "./chartSliceType";

export const dateUtil = (time: string) => { //yyyy-mm-dd
    let arr = time && time.split('-')
    return Date.UTC(Number(arr[0]), Number(arr[1]), Number(arr[2]))
}
//@typescript-eslint/no-unused-expressions

export const transformData = (data: ChartDataType): newDataType[] => { //подгон полученных данных с сервера под стандарты библиотеки

    let newData = [] as newDataType[];
    let tempObj = {} as newDataType;
    let tempID: string = '';

    createObj(data);

    function createObj(data: ChartDataType) { // обход дерева и изменение структуры данных

        if (data.sub?.length === 0) return;

        type keyType = keyof typeof data;
        let key: keyType;

        for (key in data) {
            tempObj.parent = tempID
            tempObj.id = String(data.id);
            tempObj.end = dateUtil(data.period_end);
            tempObj.start = dateUtil(data.period_start);
            tempObj.name = data.sub ? `${data.title} n(${data.sub.length}) ` : data.title;
            tempObj.color = setColor(data.id);
        }
        newData.push(tempObj)
        tempObj = {} as newDataType;
        if (data.sub && data.hasOwnProperty('sub')) {
            // tempObj.subCount = data.sub.length;
            tempID = String(data.id);
            let n = 0
            while (n < data.sub.length) {
                createObj(data.sub[n])
                n = n + 1
            }
        }
    }

    return newData
}

function setColor(arg: number): string {
    switch (arg) {
        case  1: {
            return "#193995FF"
        }
        case 2 || 5: {
            return "#D8AE0DFF"
        }
        case 3 || 4: {
            return "#28D80DFF"
        }
        default: {
            return "#193995FF"
        }
    }
}

export type newDataType = {
    start: number,
    end: number,
    id: string,
    name: string,
    parent: string,
    color: string,
    subCount: number
}