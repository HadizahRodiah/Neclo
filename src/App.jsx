import Home from './component/Home';
import Sport from './component/Sport';
import Fashion from './component/Fashion';
import Asia from './component/Asia';
import Africa from './component/Africa';
import Europe from './component/Europe';
import Navbar from './component/Navbar';
import Developer from './component/Developer';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Religion from './component/Religion'
import './App.css'


function App() {
  return (
    <>
      <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Sport" element={<Sport/>}/>
        <Route path="/Africa" element={<Africa/>}/>
        <Route path="/Europe" element={<Europe/>}/>
        <Route path="/Asia" element={<Asia/>}/>
        <Route path="/Religion" element={<Religion/>}/>
        <Route path="/Fashion" element={<Fashion/>}/>
        <Route path="/Developer" element={<Developer/>}/>
      </Routes >    
    </>
  )
}

export default App
