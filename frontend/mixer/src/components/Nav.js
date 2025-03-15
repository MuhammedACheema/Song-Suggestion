import React from 'react'
import './styles/Nav.css'
import { Link } from "react-router-dom"; // Import Link for navigation

function Nav(){
    return(
        <nav> 
             <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to= "/Recommendations">Recommendations</Link></li>
                <li><Link to = "/Mixer">Mixer</Link></li>
                <li style={{float:"right"}}><a href = " ">Sign In</a></li>
             </ul>
        </nav>
       
    )
}

{/* <Router>
            <Switch>
            <nav> 
                <Route exact path="/" component={Home} />
                <Route path = "/Recommendations" component={Recommendations}/>
                <Route path = "/Mixer" component={Mixer}/>
                <Route style={{float:"right"}} path = "/Signin" component={Signin}/>
            </nav>
            </Switch>

        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/project" component={Projects} />
        <Route path="/aboutus" component={AboutUs}/>
      </Switch>
        </Router> */}
       

export default Nav;