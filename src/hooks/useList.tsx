import { useState } from "react";

export const useList = (arr: any) => {
    let [data, setData] = useState(arr)
    function push(val: number) {
        setData([...data, val])
    }

    function pop(num: any) {
        let newArr = data.filter((item: any, index: any) => {
            return index !== num;
        })

        setData(newArr)
    }

    function clear() {
        let newArr = data.filter((item: any, index: any) => {
            return index === -1;
        })

        setData(newArr)
    }

    function reset() {

        setData([...arr])
    }

    function map() {
        let items = data.map((item: any) => {
            return item * 2;
        })
        setData(items)
    }

    return [
        data, {
            push,
            pop,
            clear,
            reset,
            map
        }
    ]
};
