import React, { useEffect, useState } from 'react'

export default ({message, a, b, c}) => {
    console.log('Fui Renderizado')
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('executo apenas uma vez')
    }, [])

    useEffect(() => {
        setCount((_count) => {
            return _count + 1
        })
    }, [message, a])

    return <div className="text-center font-weight-bold text-primary">
        Mensagem mudou {count} vezes.
    <span> {message}  </span>
</div>
}