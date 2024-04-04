import { useEffect, useState } from "react";

function useModel(first, second, operator) {
    const [output, setOutput] = useState(null);

    useEffect(() => {
        if (first !== null && second !== null && operator !== null) {
            let result;
            if (operator === '+') {
                result = first + second;
            } else if (operator === '-') {
                result = first - second;
            } else if (operator === '*') {
                result = first * second;
            } else if (operator === '/') {
                result = first / second;
            }
            setOutput(result);
        }
    }, [first, second, operator]);

    return output;
}

export default useModel;
