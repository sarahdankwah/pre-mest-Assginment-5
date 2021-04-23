import {
  createContext,
  useContext,
  useState,
} from 'react';

const counter = createContext();

const CounterProvider = ({ children }) => {
    const [counterState, setCounterState] = useState(0);

    const updateState = () => {
        setCounterState(counterState + 1)
    }

    return (
        <counter.Provider value={{ counterState, updateState }}>
            {children}
        </counter.Provider>
    )
}

const useCounter = () => useContext(counter);

export { CounterProvider, useCounter };