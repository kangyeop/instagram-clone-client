/* eslint-disable */
import React from "react";
import useAxios from "axios-hooks";
import { StandardTemplate } from "components/templates";
// import { Container } from "./styles";

type CounterProps = {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onIncreaseBy: (diff: number) => void;
};

function CountTest({ count, onIncrease, onDecrease, onIncreaseBy }: CounterProps) {
    console.log(count);
    return (
        <div>
            <h1>{count} !!</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <button onClick={() => onIncreaseBy(5)}>+5</button>
        </div>
    );
}

export default CountTest;
