'use client'
import React, { useEffect, useState } from 'react'
import useTodos from '../hooks/useTodos'
import { ToDo } from '../services/todoService';

const page = () => {

    const [todos, setTodos] = useState<ToDo[]>([])

    const { response } = useTodos();

    useEffect(() => {
        const getTodos = async () => {
            const res = await response
            setTodos(res)
        }
        getTodos()
    }, [])

    return (
        <>
            <h1>Welcome to the todos page!</h1>
            <ul>
                {todos.slice(0, 10).map((todo) => (
                    <>
                        <li key={todo.id} >{todo.title}</li>
                    </>
                ))}
            </ul>

        </>

    )
}

export default page
