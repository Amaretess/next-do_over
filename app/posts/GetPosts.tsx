"use client"

import React, { useEffect, useState } from 'react'
import usePosts, { Post } from '../hooks/usePosts'

const GetPosts = () => {

    const [posts, setPosts] = useState<Post[]>([]);


    useEffect(() => {
        async function getPosts() {
            const requestPosts = await usePosts()
            // due to scope must grab nested function out of async func to destructure response(res)
            const responsePosts = requestPosts.res;
            setPosts(posts);
            console.log(responsePosts);
        }
        getPosts()
    }, [])

    return (
        <>

        </>
    )
}

export default GetPosts
