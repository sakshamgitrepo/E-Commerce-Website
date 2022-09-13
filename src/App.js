import { Route, Routes } from "react-router-dom";
import Checkout from "./routes/Checkout-Page/checkout.component";
import Home from "./routes/home/home.component";
import Navbar from "./routes/Navbar/Navbar";
import Shop from "./routes/Shop/shop.component";
import SignInPage from "./routes/sign-in-page/sign-in-page.component";



function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
      <Route index element ={<Home/>}/>
      <Route path="/shop/*" element={<Shop/>}/>
      <Route path="/sign-in-page" element={<SignInPage/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      </Route>
      </Routes>
    );
}

export default App;
