import * as React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from '../views/Home';
import Id from '../views/Id';
import Layout from './Layout';
import MostVisited from '../views/MostVisited';


const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/most-visited" element={<MostVisited />} />
      </Route>
      <Route path="/:id" element={<Id />} />
    </Routes>
  );
}
export default App;