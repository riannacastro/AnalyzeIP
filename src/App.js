import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Lookup from './components/lookup/Lookup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Lookup />}></Route>
        {/* <Route path='/food-recalls' element={<FoodRecalls />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
