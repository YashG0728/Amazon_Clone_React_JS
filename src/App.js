import './App.css';
import Checkout from './component/Checkout/Checkout';
import DisplayContent from './component/DisplayContent/DisplayContent';
import Mainpage from './component/homapage/Mainpage';
import NavBarRoute from './component/navbarRouting.js/Navbarrouting';
import NavBar from './component/navigation/NavBar';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';
import {BrowserRouter,Routes,Route}from "react-router-dom";
import CartContextProvider from './component/PlaceOrder/CartContextProvider';
function App() {
  return (
<div>
<CartContextProvider>

<NavBar/>
<NavBarRoute/>
      <BrowserRouter>
      <Routes>
          <Route exact path = "/" element = {<Mainpage/>} />
          <Route exact path = "/display" element = {<DisplayContent/>} />
          <Route exact path =  "/order/:id" element = {<PlaceOrder/>} />
          <Route exact path =  "/checkout" element = {<Checkout/>} />
          </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  //   <Router>
  //     <div className="App">
  //     <NavBar/>
  //     <NavBarRoute/>

  //         <Routes>

  //            <Route path=''>
  //               <Mainpage/>
  //            </Route>

  //               <Route path='/display'>
  //                   <DisplayContent/>
  //               </Route>

  //           <Route path='/order'>
  //           <PlaceOrder/>
  //           </Route>

  //         </Routes>

  //      <Checkout/>
  //   </div>
  // </Router>
  );
}

export default App;