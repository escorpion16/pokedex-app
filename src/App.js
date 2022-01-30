import './App.css';
import { HashRoute, Routes, Route } from "react-router-dom";
import NameForm from './components/NameForm';

function App() {
  return (
    <div className="App">
      <HashRoute>
        <Routes>
          <Route path="/" element={<NameForm/>}/>
        </Routes>
      </HashRoute>
    </div>
  );
}

export default App;
