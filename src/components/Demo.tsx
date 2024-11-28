import React from "react";
import Button from "./Testconfig/Button";

const Demo: React.FC = () => {
    const [count, setCount] = React.useState<number>(1);
    return (
        <>
            <div>Demo {count}</div>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Count
            </button>
        </>
    );
};

export default Demo;
