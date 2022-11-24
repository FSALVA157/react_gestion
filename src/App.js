import logo from './logo.svg';
import './App.css';
import AppLayout from './pages/layout/AppLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = ()=> {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<AppLayout />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
