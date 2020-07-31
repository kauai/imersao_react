import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import CadastroVideo from './pages/cadastro/video'
import CadastroCategoria from './pages/cadastro/categoria'
import PageDefault from './components/PageDefault'

ReactDOM.render(
  <Router>
      <PageDefault>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/cadastro/video" component={CadastroVideo}/>
        <Route path="/cadastro/categoria" component={CadastroCategoria}/>
        <Route path="*" component={props => JSON.stringify(props)}/>
        {/* <Route path='*' render={props => {
          return JSON.stringify(props)
        }}/> */}
        </Switch>
      </PageDefault>
  </Router>,
document.getElementById("root"));
