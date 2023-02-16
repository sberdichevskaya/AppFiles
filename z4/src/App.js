import React from "react";
import {Routes, Route} from 'react-router-dom';

import Authorization from './authorization';
import Registration from "./registration";

import {Layout} from "./Components/Layout";

function App() {
    return (
        <>

            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="Authorization" element={<Authorization/>} />
                    <Route path="Registration" element={<Registration/>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
