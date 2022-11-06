import { getRequest } from "./apiInterceptor"

export const getRandomTodo = () => {
    const randId = Math.floor((Math.random() * 9) + 1)
    return getRequest(`todos/${randId}`)
}

