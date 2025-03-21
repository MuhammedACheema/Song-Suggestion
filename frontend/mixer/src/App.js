import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import Rec from './components/Rec';
import Mixer from './components/Mixer';
import SpotifySearch from './API';
// import Signin from './components/Signin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
     
      <Router>
        <div>
         <Nav/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path = "/Recommendations" element={<Rec/>}/>
                <Route path = "/Mixer" element={<Mixer/>}/>
                {/*<Route style={{float:"right"}} path = "/Signin" element={Signin}/> */}
            </Routes>

            <SpotifySearch name="drake" type="artist" />

        </div>
      </Router>
  );
}

export default App;
