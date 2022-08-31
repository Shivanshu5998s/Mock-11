import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from "./Components/Dashboard";
import { Navbar } from "./Components/Navbar";
import { Add } from "./Components/Add";
import { Edit } from "./Components/Edit;"
import { Success } from "./Components/Success";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </div>
  );
}

export default App;
