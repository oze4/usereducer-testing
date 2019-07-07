import React from 'react';
import Counter from './Components/Counter.js';
import SeparateComponent from './Components/SeparateComponent.js';
import { CounterProvider } from './ContextProviders';


const styles = {
    app: {
        textAlign: 'center'
    }
}


function App() {
    return (
        <div style={styles.app}>
            <CounterProvider>
                <Counter />
                <SeparateComponent />
            </CounterProvider>
        </div>
    );
}

export default App;
