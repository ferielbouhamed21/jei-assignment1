import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Informations from "./pages/Inofrmations";
import NotFound from './pages/NotFound';
import Posts from "./pages/Posts";
import Users from './pages/Users';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/"  element={<Home/>}/>
      <Route exact path="/users/:id"  element={<Informations/>}/>
      <Route exact path="/users"  element={<Users/>}/>
      <Route exact path="/posts/:id" element={<Posts/>}/>
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
