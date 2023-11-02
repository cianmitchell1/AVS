import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages & components
import Home from './pages/Home'
import Signon from './pages/Signon'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/Signon"
              element={<Signon />}
            />
            <Route
              path="/Signup"
              element={<Signup />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
