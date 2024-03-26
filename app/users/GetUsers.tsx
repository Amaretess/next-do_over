"use client"
import React, { useEffect, useState } from 'react'
import useUsers, { User } from '../hooks/useUsers';

const GetUsers = () => {

    const [data, setData] = useState<User[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        // data being received is a promise type from useUsers ~ put into an async func
        async function getUsers() {
            const returnData = await useUsers();
            const returnRes = returnData.res;
            setData(returnRes);
            setLoading(false);
        }
        getUsers();
    }, []);

    if (isLoading) return (<div>Loading</div>);


    return (
        <ul>
            {data?.map(user => (
                <li key={user.id} >{user.name}</li>
            ))}
        </ul>
    )
}

export default GetUsers;
