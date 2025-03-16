import Post from "./Post";
import classes from "./PostsList.module.css"
import { useLoaderData } from "react-router-dom";


function PostsList() {
    const posts = useLoaderData();

    return (
        <>
            {posts.length > 0 && (<ul className={classes.posts}>
                {posts.map((post) => <Post id={post.id} key={post.id} author={post.author} body={post.body} />)}
            </ul>)}

            {posts.length === 0 && (<div style={{ textAlign: 'center', color: 'white' }}>
                <h2> No posts yet </h2>
                <p>Start adding some by clicking on New Post</p>
            </div>)}

        </>
    );
};

export default PostsList