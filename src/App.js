import "./index.css";
import Header from "./components/Header";
import BagList from "./components/BagList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyCollection from "./components/MyCollection";
import WishList from "./components/WishList";
// why do we use Routes & Route?

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BagList />} />
          <Route path="/myCollection" element={<MyCollection />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
