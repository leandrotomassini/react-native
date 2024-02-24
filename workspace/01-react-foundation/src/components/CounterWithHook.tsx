import { useCounter } from '../hooks';

interface Options {
    initialValue: number;
}


export const CounterWithHook = ({ initialValue }: Options) => {

    const { counter, increaseBy } = useCounter(initialValue);

    return (
        <>
            <h3>Contador <small>{counter}</small></h3>

            <div>
                <button onClick={() => increaseBy(1)}>+1</button>
                &nbsp;
                <button onClick={() => increaseBy(-1)}>-1</button>
            </div>
        </>
    );
}
