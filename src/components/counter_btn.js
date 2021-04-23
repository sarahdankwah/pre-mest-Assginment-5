import { useCounter } from '../model/counterContext';

const CounterBtn = () => {
    console.log('Loading Counter Component')
    const { updateState } = useCounter()
    return (
        <button onClick={updateState}>
            Magic
        </button>
    )
}

export default CounterBtn
