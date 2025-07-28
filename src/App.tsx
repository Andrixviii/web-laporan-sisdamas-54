import {BrowserRouter as Router, Routes, Route} from 'react-router';
import Artikel from './components/page/Home';
import TetangKami from './components/page/TentangKami';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Artikel/>} />
        <Route path="/TentangKami" element={<TetangKami/>} />
      </Routes>
    </Router>
  );
}


export default App;