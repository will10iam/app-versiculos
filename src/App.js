import { Routes, Route } from "react-router-dom";

import Home from './Pages/Home'
import Verses from './Pages/Verses'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/verses' element={<Verses />} />
      </Routes>
    </div>
  )
}

export default App;
