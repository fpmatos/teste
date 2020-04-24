import React, {useState, useEffect} from "react"
import {retornarTodos} from "../../../services/productService"
import "./estilo.css"
import {removeItem} from "../../../services/productService"
import { useHistory } from "react-router-dom"
import ListItem from "./ListItem"


export default function Lista(){
    const history = useHistory()
    const [itens, setItens] = useState([{nome: 'teste 1', id: 1, tipo: 'tipo 1', valor: '33434', codigo: 'codigo'}, {nome: 'teste 2', id: 2}])
    
    // useEffect(()=>{

    //     retornarTodos().then((x)=>{
    //         setItens(x)
    //     }).catch(e => {
    //         console.log('deu erro no carregamento da listagem')
    //     })

    // }, [])

    const deleteitem = (codigo)=>{
        setItens((state)=>{
            const newList = [...state]
            const indexToDelete = itens.findIndex(e=>e.codigo===codigo)
            newList.splice(indexToDelete, 1)
            return (newList)
        })
    }
    
    const editarItem = (item)=>{
        history.push(`/editar-produtos/${item}`)
    }

    const teste = (id) => {
        console.log('funcao chamada antes do click, ID:', id)
        return () => {
            console.log('funcao chamada pelo Click - ID:', id)
        }
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
                {itens.map((x, i)=>{
                    return(
                        <ListItem {...x} onDelete={deleteitem}/>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}