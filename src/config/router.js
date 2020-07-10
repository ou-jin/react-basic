import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import React from 'react'
let file = require.context('../views', true, /\.js$/);
let getFileName = n =>{
    let list = n.split('/')
    let name = list[1].replace('.js','')
    return name
  }
export default () => (
    <Router>
        <Switch>
            {
                file.keys().map((e,i) => {
                    return <Route exact path={'/'+getFileName(e)} component={file(e).default}  key={i}/>
                })
            }
        </Switch>
    </Router>
)
 