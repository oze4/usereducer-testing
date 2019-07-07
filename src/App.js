import React from 'react';
import Counter from './Components/Counter.js';
import SeparateComponent from './Components/SeparateComponent.js';
import { CounterProvider } from './Components/Context.js';
//import logo from './logo.svg';
import './App.css';


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
