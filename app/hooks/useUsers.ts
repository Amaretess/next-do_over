
export type Users = User[];

export interface User {
    id: number;
    name: string
}

const useUsers = () => {
    const getUsers = async () => {
            const request = await fetch("https://jsonplaceholder.typicode.com/users" );
            const res: Users = await request.json();
            return {res};
    }

    return getUsers();
};

export default useUsers;