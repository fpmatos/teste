import React, {useState, useEffect} from 'react'
import "./estilo.css"
import {authUser} from "../../services/authUser"
import Message from './Message'

export default function Login(){
    const [model, setModel] = useState({email:"", senha:""})
    const [message, setMessage] = useState()

    const changeModel = ({target})=>{
        setModel((state)=>{
            return {...state, [target.name]: target.value}
        })
    }

    const logar = (event)=>{
        authUser(model.email,model.senha).then((result)=>{
            setMessage(result)
        }).catch((erro)=>{
            setMessage(erro)
        })

        event.preventDefault()
    }

    useEffect(() => {
        return () => {
            console.log('Chamou o destrutor')
        }
    }, [])

    return(
        <div className="form-content d-flex">
            <form onSubmit={logar} className="mx-auto">
                <div className="text-center">
                    <h3>Login</h3>
                </div>
                <input onChange={changeModel} type="email" name="email" className="form-control my-2" placeholder="Digite o seu email" />
                <input onChange={changeModel} type="password" name="senha" className="form-control my-2" placeholder="Digite a sua senha" />
                
                <button type="submit" className="btn btn-primary btn-block my-2">Logar</button>
                <Message message={message}/>
            </form>
        </div>
    )
}