export type Posts = Post[];

export interface Post {
    id: number;
    title: string;
    body: string;

}

const usePosts = () => {
    const getPosts = async () => {
        const request = await fetch("https://jsonplaceholder.typicode.com/posts");
        const res: Posts = await request.json();
        return {res};
    }
    return getPosts()
}

export default usePosts;
