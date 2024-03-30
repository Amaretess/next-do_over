
import todoService, { ToDo } from "../services/todoService";

const useTodos = () => {

    const {request} = todoService.getAll<ToDo[]>()
        // destructured data renamed to allTodos
            const response = request.then(({data: allTodos}) => {
                const todos: ToDo[] = allTodos;
                return todos;
            })
            return { response }

}

export default useTodos;