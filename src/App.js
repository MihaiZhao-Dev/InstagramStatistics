import Dashboard from "./components/Dashboard";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

function App() {
  return (
    <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
            <Dashboard />
        </PersistGate>
    </Provider>
  );
}

export default App;
