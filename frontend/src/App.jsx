import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./components/Home";
import { Register } from "./components/Register";
import { Login } from "./components/login";
import { Tshirt } from "./components/tshirt";
import { Newdrop } from "./components/newdrop";
import { Sweatshirt } from "./components/sweatshirt";
import { Oneobject } from "./components/oneObject";
import { Input } from "./components/input-del";
import { Del } from "./components/del-mess";
import { Payment } from "./components/payment";
import { Basket } from "./components/basket";
import { Welcome } from "./components/welcome";
// import { BasketProvider } from './components/basketContext';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/NewDrop" element={<Newdrop />}/>
      <Route path="/Sweatshirt" element={<Sweatshirt/>}/>
      <Route path="/Tshirt" element={<Tshirt />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Oneobject" element={<Oneobject />} />
      <Route path="/Input" element={<Input />} />
      <Route path="/Del" element={<Del/>} />
      <Route path="/Payment" element={<Payment/>} />
      <Route path="/Basket" element={<Basket/>} />
      <Route path="/Welcome" element={<Welcome/>} />
      {/* <Route path="/basketProvider" element={<BasketProvider />}/> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
