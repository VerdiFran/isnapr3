import React from 'react'
import './App.css'
import FormContainer from "./components/Form/FormContainer"
import {Provider} from "react-redux"
import store from "./redux/store"
import ResultContainer from "./components/Result/ResultContainer"

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                </header>
                <FormContainer/>
                <ResultContainer/>
            </div>
        </Provider>
    )
}

export default App
