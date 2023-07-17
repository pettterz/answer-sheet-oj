import { Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import Home from "./Home/Home";
import Sheet from "./Sheet/Sheet";

const App = () => (
  <Routes>
    <Route path="/" element={ <Layout /> }>
      <Route index element ={ <Home /> } />
      <Route path="answer" element={ <Sheet />} />
    </Route>
  </Routes>
);

export default App;
