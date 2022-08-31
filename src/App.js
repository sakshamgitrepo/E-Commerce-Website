import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navbar from "./routes/Navbar/Navbar";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop =()=>{
  return<h1>Shop Page</h1>
  }

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
      <Route index element ={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      </Route>
      </Routes>
    );
}

export default App;
