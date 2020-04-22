import React, {useState, useEffect} from "react"
import {retornarTodos} from "../../../services/productService"
import "./estilo.css"
import {removeItem} from "../../../services/productService"
import { useHistory } from "react-router-dom"


export default function Lista(){
    const history = useHistory()
    const [item, setItem] = useState([])
    
    useEffect(()=>{
        retornarTodos().then((x)=>{
            setItem(x)
        },[item])
    })

    const deleteitem = (codigo)=>{
        removeItem(codigo).then(()=>{
            setItem((state)=>{
                const newList = [...state]
                const indexToDelete = item.findIndex(e=>e.codigo===codigo)
                newList.splice(indexToDelete, 1)
                return (newList)
            })
        })

    }
    
    const editarItem = (item)=>{
        history.push(`/editar-produtos/${item}`)
    }

    return(
        <div className="lista">
            <div className="text-center py-2">
                <h3>Lista de Produtos</h3>
            </div>
            <table className="container my-4" style={{width:"80%"}}>
                <thead>
                <tr className="font-weight-bold text-center lista-header">
                  <td>NOME</td>
                  <td>TIPO</td>
                  <td>VALOR</td>
                  <td>CODIGO</td>
                  <td>EDIÇÃO</td>
                </tr>
                </thead>
                <tbody>
                {item.map((x, i)=>{
                    return(
                        <tr key={i}>
                            <td> {x.nome} </td>
                            <td> {x.tipo} </td>
                            <td> {x.valor} </td>
                            <td> {x.codigo} </td>
                            <td> <button onClick={()=>editarItem(x.id)} className="btn btn-primary btn-sm">Editar</button><button onClick={()=>deleteitem(x.codigo)} className='btn btn-danger btn-sm'>Excluir</button> </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}
