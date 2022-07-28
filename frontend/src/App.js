import './App.css';
import { Routes, Route } from 'react-router-dom';
import FrontScreen from './screens/FrontScreen';
import  Navbar  from './components/Navbar';
import OrderScreen from './screens/OrderScreen';
import {VendorListContextProvider} from "./Store/VendorListContext"

function App() {
  return (
    <>
      <VendorListContextProvider>
        <Navbar/>
        <Routes>
            <Route element={<Navbar/>}/>
            <Route path="/" element={<FrontScreen />} />
            <Route path="/vendor/:c_name/:id" element={<OrderScreen />} />          
        </Routes>
      </VendorListContextProvider>
    </>
  );
}

export default App;
