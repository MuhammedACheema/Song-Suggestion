import React from 'react'
import './Nav.css'

function Nav(){
    return(
        <nav> 
             <ul>
                <li><a href = " ">Home</a></li>
                <li><a href = "">Recommendations</a></li>
                <li><a href = " ">Mixer</a></li>
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