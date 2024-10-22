import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./app/home/(componenets)/Header";
import Home from "./app/Home";
import Blog from "./app/blog/[id]/Blog";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
