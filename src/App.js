import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navbar from "./routes/Navbar/Navbar";
import SignInPage from "./routes/sign-in-page/sign-in-page.component";

const Shop =()=>{
  return<h1>Shop Page</h1>
  }

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
