import React, { useEffect } from 'react'

export default ({id, nome, tipo, valor, codigo, onDelete}) => {    
    return  <tr>
        <td> {nome} </td>
        <td> {tipo} </td>
        <td> {valor} </td>
        <td> {codigo} </td>
        <td> 
            <button className="btn btn-primary btn-sm">Editar</button>
            <button onClick={() => { onDelete(id) }} className='btn btn-danger btn-sm'>Excluir</button> 
            <button className='btn btn-danger btn-sm'>Teste</button> 
        </td>
    </tr>
}