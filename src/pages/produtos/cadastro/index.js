import React, { useState } from 'react'
import "./estilo.css"
import {adicionar} from "../../../services/productService"
import { useHistory } from 'react-router-dom'

export default function Cadastro(){
    const history = useHistory()
    const [product, setProduct] = useState({nome:"", tipo:"", valor:"", codigo:""})

    const changeProduct = ({target})=>{
        setProduct((state)=>{
            return {...state, [target.name]: target.value}
        })
    }

    const cadastrar = (event)=>{
        adicionar(product).then(()=>{
            history.push(`/lista-produtos`)
        })

        event.preventDefault()
    }

    return(
        <div className="cadastro-content d-flex">
            <form onSubmit={cadastrar} className="mx-auto">
                <div className="text-center">
                    <h4>Cadastro de Produtos</h4>
                </div>
                <input onChange={changeProduct} className="form-control my-2" name="nome" type="text" placeholder="Digite o nome do produto" />
                <input onChange={changeProduct} className="form-control my-2" name="tipo" type="text" placeholder="Digite o tipo" />
                <input onChange={changeProduct} className="form-control my-2" name="valor" type="text" placeholder='Digite o valor' />
                <input onChange={changeProduct} className="form-control my-2" name="codigo" type="text" placeholder="Digite o código de barras" />
                <button className="btn btn-success btn-block my-2" type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}