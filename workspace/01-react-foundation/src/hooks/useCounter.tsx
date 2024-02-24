import { useState } from 'react';


export const useCounter = () => {

    const [counter, setCounter] = useState<number>(10);

    const increaseBy = (value: number) => {
        setCounter(counter + value);
    }

    return {
        // Properties
        counter,

        // Methods
        increaseBy,
    }
}
