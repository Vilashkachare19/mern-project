import Vegetables from "./components/Vegetables";
import Fruits from "./components/Fruits";
import City from "./components/City";
import Countries from "./components/Countries";
import User from "./components/getUser/User";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function  App(){
  return(
    
    <>
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<User />}/>,
        </Routes>
      </div>
    </Router>
    {/* <Vegetables/>
    <Fruits/>
    <City/>
    <Countries/> */}
    </>
  );

}
