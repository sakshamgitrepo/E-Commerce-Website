import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/home.component";
import Navbar from "./routes/Navbar/Navbar";
import Shop from "./routes/Shop/shop.component";
import SignInPage from "./routes/Sign-in-page/sign-in-page.component";



function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
      <Route index element ={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/sign-in-page" element={<SignInPage/>}/>
      </Route>
      </Routes>
    );
}

export default App;
