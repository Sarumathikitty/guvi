import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Agent from "./Agent";
import Ticket from "./Ticket";
import Contact from "./Contact"
function App() {
  return (
    <BrowserRouter>
      <div>
        <table>
          <tr>
            <th> <Link to="/agent">Agent</Link></th>
             <th><Link to="/contact">Contact</Link></th>
             <th><Link to="/ticket">Ticket</Link></th>
           </tr>
        </table>
        <Switch>
          <Route path="/agent" component={Agent} />
          <Route path="/contact" component={Contact} />           
          <Route path="/ticket" component={Ticket} />     
        
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
