import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import About from "./pages/Homepage";
import addResource from "./pages/Homepage"
const AppRouter=()=>{

    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/addResource' element={<addResource/>}/>

                <Route path='/About' element={<About/>}/>
                {/* <Route path='/' element={<Homepage/>}/> */}
            </Routes>
        </Router>
    )
}
export default AppRouter;