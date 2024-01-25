import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Missing from "./Missing";
import { useStoreState, useStoreActions } from "easy-peasy";

// import api from "./api/posts";
// import { useContext } from "react";
// import DataContext from "./context/DataContext";

const PostPage = () => {
  //   const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostById = useStoreState((state) => state.getPostById);
  //   const post = posts.find((post) => post.id.toString() === id);
  const post = getPostById(id);

  const handleDelete = (id) => {
    // try {
    //   await api.delete(`/posts/${id}`);

    //   const postsList = posts.filter((post) => post.id !== id);
    //   setPosts(postsList);
    //   navigate("/");
    // } catch (err) {
    //   console.log(`Error: ${err.message}`);
    // }

    deletePost(id);
    navigate("/");
  };

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className="editButton">Edit Post</button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <Missing />
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
