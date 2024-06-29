
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Blog} from './pages/Blog';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/Blog" element={<Blog/>}></Route>
          </Routes>      
      </BrowserRouter>
    </>
  )
}

export default App
