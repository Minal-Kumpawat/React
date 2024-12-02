import React from 'react'
import Name from './Name'
import Study from './Study'
import Education from './Education'
import Header from './Header'
import Exp from './Exp'
import Calculator from './Calculator'
import Form from './Form'

// import { BrowserRoute, Routes, Route } from 'react-router-dom'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Fetch from './Fetch'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Name />}/>
          <Route path='/education'element={<Education />}/>
          <Route path='/study'element={<Study />}/>
          <Route path='/exp' element={<Exp/>}/>
          <Route path='cal' element={<Calculator/>}/>
          <Route path='form' element={<Form/>}/>
          <Route path='/fetch' element={<Fetch/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
