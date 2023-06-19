import { Route, Routes,  Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";







function App() {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    const token = sessionStorage.getItem("token");
    if(token){
      let decoded = jwt_decode(token);
      setUser(decoded.sub);
      console.log(decoded.sub)
    }
  })
  return (
    <div className="app"> 
    <Routes>
      <Route  
      path="/" 
      element={
        user ? <Navigate to="/dashboard"/> : <Login setUser={setUser}/>
      }
      />
      <Route
      path="/dashboard"
      element={
        user ? <Dashboard setUser={setUser} /> : <Navigate to="/" />}
      />

      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<Products />} />
      <Route path="/about" element={<About />} />

      <Route  
      path="/product-detail/:id" 
      element={
        user ? <ProductDetail setUser={setUser}/> : <Navigate to="/"/>
      }
      />


    </Routes>
    
  
 
    </div>
  );
}

export default App;
