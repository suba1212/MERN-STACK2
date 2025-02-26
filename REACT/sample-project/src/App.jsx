import React from 'react'
import {BrowserRouter,Route,Router,Routes}from'react-router-dom'
import About from '/page/About'
import Home from '/page/Home'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />     
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App

