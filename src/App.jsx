import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { KidsShow } from "./KidsShow";
import { KidsNew } from "./KidsNew";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/kids/:id" element={<KidsShow />} />
        <Route path="/kids/new" element={<KidsNew />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
