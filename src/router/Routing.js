import React from "react";
import {Route,Routes} from 'react-router-dom';
import Menu from './headeroptions/Menu';
import Home from "./headeroptions/Home";

const Routing=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/menu" Component={Menu}/>
            </Routes>
        </div>
    )
}

export default Routing;