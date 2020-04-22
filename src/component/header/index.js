import React from "react"
import {Link} from "react-router-dom"

export default function Header(){
    return(
        <div>
            <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/cadastro-produtos">Cadastro de Produtos</Link></li>
            </ol>
        </div>
    )
}