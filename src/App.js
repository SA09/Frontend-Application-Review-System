
import './App.css';

import List from  './list';
import Add from './add';
import Navigation from './navigation.js'
import {BrowserRouter,Route, Routes} from 'react-router-dom'

function App() {
  return (
   <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       Job Application Review System 
     </h3>
     
     <Navigation/>
     
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<List />} />
       <Route path='/add' element={<Add />}/>
     </Routes>
     </BrowserRouter>
     
     
     
     
    </div>
    );
  }


export default App;
