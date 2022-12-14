import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import About from "./pages/Homepage";
import AddResource from "./pages/AddResource";
import Resources from "./pages/Resources";
const AppRouter=()=>{

    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/addResource' element={<AddResource/>}/>
                <Route path='/Resources' element={<Resources/>}/>

                <Route path='/About' element={<About/>}/>
                {/* <Route path='/' element={<Homepage/>}/> */}
            </Routes>
        </Router>
    )
}
export default AppRouter;