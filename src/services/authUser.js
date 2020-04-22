const user = [{
    email:"jefer210784@gmail.com",
    senha:"123321"
}]

export const authUser = (email, senha)=>{
    const findUser = user.find(e=>e.email===email && e.senha===senha)

    if(email==="" || senha==="") return Promise.reject("Primeiro deve preencher os campos vazios")

    if(email.length >100) return Promise.reject("O email deve conter no máximo 30 caracteres")

    if(senha.lenght !==6) return Promise.reject("A senha deve conter no máximo 15 caracteres")

    if(!findUser) return Promise.reject("Usuário não autenticado")

    if(findUser) return Promise.resolve("Usuário Logado")
}