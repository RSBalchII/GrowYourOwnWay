import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Home} from "./Home";


export function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}