import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPath } from './slice/pathSlice';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

function App() {
  const dispatch = useDispatch();

  const handleRouteChange = (path) => {
    dispatch(setPath(path));
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/component1" onClick={() => handleRouteChange('Component1')}>Component 1</Link>
            </li>
            <li>
              <Link to="/component2" onClick={() => handleRouteChange('Component2')}>Component 2</Link>
            </li>
            <li>
              <Link to="/component3" onClick={() => handleRouteChange('Component3')}>Component 3</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/component1" element={<Component1 />} />
          <Route path="/component2" element={<Component2 />} />
          <Route path="/component3" element={<Component3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
