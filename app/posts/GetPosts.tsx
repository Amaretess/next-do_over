import React, { useEffect } from 'react'
import usePosts from '../hooks/usePosts'

const GetPosts = () => {

    useEffect(() => {
        async function getPosts() {
            const requestPosts = await usePosts()
            // due to scope must grab nested function out of async func to destructure response(res)
            const returnPosts = requestPosts.res;

        }
    }, [])

    return (
        <>

        </>
    )
}

export default GetPosts
