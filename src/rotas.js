import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"
import Header from "./component/header"
import Cadastro from "./pages/produtos/cadastro"
import Lista from "./pages/produtos/lista"
import Editar from './pages/produtos/editar'

export default function Rotas(){
    return(
        <BrowserRouter>
          <Header />
           <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/login" component={Login} />
               <Route exact path="/cadastro-produtos" component={Cadastro} />
               <Route exact path="/lista-produtos" component={Lista} />
               <Route exact path="/editar-produtos/:id" component={Editar} />
           </Switch>
        </BrowserRouter>
    )
}