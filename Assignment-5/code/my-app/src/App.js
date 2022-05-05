
import Firstpage from './Firstpage'
import Postview from './Postview';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Firstpage />}></Route >
        <Route path='/Postview' element={<Postview />}> </Route>
      </Routes>

    </Router>




  )
};

export default App;
