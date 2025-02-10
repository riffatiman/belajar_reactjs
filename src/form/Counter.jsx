import { useState } from "react";

export default function Counter() {
    let [counter, setCounter] = useState(0);

    console.info(`Render Counter ${counter}`);

    function handleClick() {
        setCounter((c) => c + 1);
        // counter masih 0
        console.log(counter);
    }

    return (
        <div>
            <div>
                <button onClick={handleClick}>Increment</button>
            </div>

            <h1>Counter : {counter}</h1>
        </div>
    )
}
