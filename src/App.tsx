import { useState } from "react";
import Demo from "./components/Demo";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>Hello world!</div>
            <Demo />
        </>
    );
}

export default App;
