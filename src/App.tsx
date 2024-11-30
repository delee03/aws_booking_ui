import { useState } from "react";
import Demo from "@/components/Demo";
import { Button } from "antd";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="text-red-500 bg-black">Hello world!</div>
            <Demo />
            <Button type="primary">Button</Button>
        </>
    );
}

export default App;
