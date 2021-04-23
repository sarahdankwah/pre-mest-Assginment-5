import { CounterProvider } from './model/counterContext';
import Error from './pages/error';

function App() {
  return (
    <CounterProvider>
      <Error />
    </CounterProvider>
  );
}

export default App;
