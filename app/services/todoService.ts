import create from "./http-service";

export interface ToDo {
    id: number;
    title: string;
    completed: string;
}

export default create("/todos")