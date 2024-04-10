import './App.css';
import About from './comps/About';
import Blog from './comps/Blog';
import Discussion from './comps/Discussion';
import Home from './comps/Home';
import Login from './comps/Login';
import Navbar from './comps/Navbar';
import Profile from './comps/Profile';
import Signup from './comps/Signup';
import Solution from './comps/Solution';
import Qna from './comps/Qna';
import { BrowserRouter , Route,Routes } from 'react-router-dom';
import Tools from './comps/Tools';
import PrivateComponent from './comps/PrivateComponent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route element={<PrivateComponent/>}>
        <Route path='/discuss/:category' element={<Discussion/>}></Route>
        <Route path='/solution/:id' element={<Solution/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/questions' element={<Qna/>}></Route>
        <Route path='/Blog' element={<Blog/>}></Route>
        <Route path='/tools' element={<Tools/>}></Route>
        </Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
