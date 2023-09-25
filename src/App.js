import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddItem from './items/AddItem';
import EditItem from './items/EditItem';
import ViewItemData from './items/ViewItemData';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>}></Route>
          <Route path="/addItem" element = {<AddItem/>}></Route>
          <Route path="/editItem/:id" element = {<EditItem/>}></Route>
          <Route path="/viewItem/:id" element = {<ViewItemData/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
