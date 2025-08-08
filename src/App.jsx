import { Suspense, lazy } from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from './components/Body'
const ErrorPage = lazy(() => import("./components/ErrorPage"));

function App() {
  

  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          
          <Route path='*' element={
            <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
             <ErrorPage />
            </Suspense>
          }/>

          <Route path='/' element={<Body/>}/>

          


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
