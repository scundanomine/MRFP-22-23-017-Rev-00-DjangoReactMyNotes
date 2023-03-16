import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' exact element={<NotesListPage />} />  
        <Route path='*' element={<NotFound />}/>    
      </Routes>
    </div>
    </Router>
  );
}

export default App;
