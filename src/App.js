import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import ErrorPage from './ErrorPage';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="movie/:id" element={<SingleMovie/>}/>
        <Route exact path="*" element={<ErrorPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
