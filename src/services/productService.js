const dbProduct = []
let lastid = 0

export const adicionar = (model)=>{
    model.id = lastid++
    dbProduct.push(model)
    return Promise.resolve()
}

export const retornarTodos = ()=>{
    return Promise.resolve(dbProduct)
}

export const removeItem = (codigo)=>{
    const indextoDelete = dbProduct.findIndex(e=>e.codigo===codigo)
    dbProduct.splice(indextoDelete, 1)
    return Promise.resolve()
}

export const alterar = (item)=>{
    const itemToEdit = dbProduct.find(e=>e.id === item.id)
    itemToEdit.nome = item.nome
    itemToEdit.tipo = item.tipo
    itemToEdit.valor = item.valor
    itemToEdit.codigo = item.codigo
    return Promise.resolve()
}

export const retornarItem = (id)=>{
   const itemToEdit = dbProduct.find(e=>e.id === +id)

   if(itemToEdit){
       return Promise.resolve(itemToEdit)
   }else{
       return Promise.reject()
   }
}