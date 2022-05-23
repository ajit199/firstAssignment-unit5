import { useState } from "react";

export const useCounter = (init: number) => {
    let [num, setNum] = useState(init);

    function inc(val = 1) {
        setNum(num + val)
    }

    function dec(val = 1) {
        setNum(num - val)
    }
    function set(val: number) {
        setNum(val)
    }

    return {
        num,
        inc,
        dec,
        set
    }
};
