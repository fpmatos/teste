import React, { useState, useEffect } from "react"
import {retornarItem} from "../../../services/productService"
import { useParams, useHistory } from "react-router-dom"
import {alterar} from "../../../services/productService"
import "./estilo.css"

export default function Editar(){
    let {id} = useParams()
    const history = useHistory()
    const [item, setItem] = useState({nome:"", tipo:"", valor:"", codigo:""})

    useEffect(()=>{
        retornarItem(id).then((x)=>{
            setItem(x)
        }).catch(()=>{
            history.push("/lista-produtos")
        })
    }, [id])

    const salvar = (event)=>{
        alterar(item).then(()=>{
            history.push("/lista-produtos")
        })

        event.preventDefault()
    }

   

    const changeModel = ({target})=>{
        setItem((state)=>{
            return {...state, [target.name]: target.value}
        })
    }

    return(
        <div className="edit-content d-flex">
            <form onSubmit={salvar} className="mx-auto">
                <div className="text-center py-4">
                    <h4>Editar Produto</h4>
                </div>
                <input onChange={changeModel} className="form-control my-2" type="text" name="nome" value={item.nome} />
                <input onChange={changeModel} className="form-control my-2" type="text" name="tipo" value={item.tipo} />
                <input onChange={changeModel} className="form-control my-2" type="text" name="valor" value={item.valor} />
                <input onChange={changeModel} className="form-control my-2" type="text" name="codigo" value={item.codigo} />
                <button className="btn btn-primary btn-block">Salvar</button>
            </form>
        </div>
    )
}